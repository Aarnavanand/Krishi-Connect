import React, { useState, useRef } from 'react';
import { Upload, AlertCircle, CheckCircle, Camera } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface AnalysisResult {
  disease: string;
  confidence: number;
  treatment: string;
  prevention: string[];
}

const CropAnalysis: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isCamera, setIsCamera] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      setImagePreview(URL.createObjectURL(file));
      setAnalysisResult(null);
      setError(null);
    }
  };

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsCamera(true);
        setImagePreview(null);
        setSelectedImage(null);
        setAnalysisResult(null);
        setError(null);
      }
    } catch (err) {
      console.error('Error accessing camera:', err);
      setError('Could not access camera. Please check permissions.');
    }
  };

  const captureImage = () => {
    if (videoRef.current) {
      const canvas = document.createElement('canvas');
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(videoRef.current, 0, 0);
        const imageDataUrl = canvas.toDataURL('image/jpeg');
        setImagePreview(imageDataUrl);
        
        // Convert data URL to File object
        canvas.toBlob((blob) => {
          if (blob) {
            const file = new File([blob], 'capture.jpg', { type: 'image/jpeg' });
            setSelectedImage(file);
          }
        }, 'image/jpeg');

        // Stop camera stream
        const stream = videoRef.current.srcObject as MediaStream;
        stream?.getTracks().forEach(track => track.stop());
        setIsCamera(false);
      }
    }
  };

  const handleAnalysis = async () => {
    setLoading(true);
    setError(null);

    // Simulated analysis result
    setTimeout(() => {
      setAnalysisResult({
        disease: "Leaf Blight",
        confidence: 92.5,
        treatment: "Apply copper-based fungicide every 7-10 days",
        prevention: [
          "Maintain proper plant spacing for good air circulation",
          "Water at the base of plants to keep leaves dry",
          "Remove and destroy infected plant debris",
          "Rotate crops annually"
        ]
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen p-4
      ${isDarkMode ? 'bg-deep-charcoal text-soft-white' : 'bg-soft-white text-dark-gray'}`}>
      <h1 className="text-2xl font-bold mb-4">Crop Disease Analysis</h1>
      <div className={`bg-transparent border-2 border-dashed border-green-500 rounded-lg p-4 w-full max-w-md
        ${isDarkMode ? 'text-soft-white' : 'text-dark-gray'}`}>
        <div className="flex flex-col items-center">
          <div className={`w-full max-w-md p-6 rounded-lg border-2 border-dashed text-center
            ${isDarkMode 
              ? 'border-muted-olive hover:border-neon-green' 
              : 'border-muted-green hover:border-farm-green'}`}>
            
            {isCamera ? (
              <div className="relative">
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  className="w-full rounded-lg"
                />
                <button
                  onClick={captureImage}
                  className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-full font-medium transition-colors
                    ${isDarkMode 
                      ? 'bg-neon-green text-dark-earth-brown hover:bg-opacity-90' 
                      : 'bg-farm-green text-white hover:bg-opacity-90'}`}
                >
                  Capture Photo
                </button>
              </div>
            ) : (
              <>
                <Upload className={`w-12 h-12 mx-auto mb-4 
                  ${isDarkMode ? 'text-neon-green' : 'text-farm-green'}`} />
                <div className="flex flex-col sm:flex-row justify-around items-center">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageSelect}
                    className="hidden"
                    id="image-upload"
                  />
                  <label
                    htmlFor="image-upload"
                    className={`cursor-pointer inline-block px-6 py-3 rounded-lg font-medium transition-colors
                      ${isDarkMode 
                        ? 'bg-neon-green text-dark-earth-brown hover:bg-opacity-90' 
                        : 'bg-farm-green text-white hover:bg-opacity-90'}`}
                  >
                    Select Image
                  </label>
                  <button
                    onClick={startCamera}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors
                      ${isDarkMode 
                        ? 'bg-warm-amber text-dark-earth-brown hover:bg-opacity-90' 
                        : 'bg-harvest-orange text-white hover:bg-opacity-90'}`}
                  >
                    <Camera size={20} />
                    Use Camera
                  </button>
                </div>
                <p className={`mt-4 text-sm ${isDarkMode ? 'text-golden-yellow' : 'text-earth-brown'}`}>
                  Supported formats: JPG, PNG (max 5MB)
                </p>
              </>
            )}
          </div>

          {imagePreview && !isCamera && (
            <div className="mt-8 w-full max-w-md">
              <img
                src={imagePreview}
                alt="Selected crop"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <button
                onClick={handleAnalysis}
                disabled={loading}
                className={`w-full mt-4 px-6 py-3 rounded-lg font-medium transition-colors
                  ${loading 
                    ? 'opacity-50 cursor-not-allowed' 
                    : isDarkMode
                      ? 'bg-warm-amber text-dark-earth-brown hover:bg-opacity-90'
                      : 'bg-harvest-orange text-white hover:bg-opacity-90'}`}
              >
                {loading ? 'Analyzing...' : 'Analyze Image'}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Results Section */}
      {analysisResult && (
        <div className={`p-8 rounded-lg shadow-md transition-colors duration-200
          ${isDarkMode ? 'bg-dark-earth-brown' : 'bg-golden-beige'}`}>
          <h2 className="text-2xl font-bold mb-6">Analysis Results</h2>
          
          <div className="space-y-6">
            <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-deep-charcoal' : 'bg-soft-white'}`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Detected Disease</h3>
                <span className={`px-4 py-1 rounded-full text-sm font-medium
                  ${isDarkMode ? 'bg-neon-green text-dark-earth-brown' : 'bg-farm-green text-white'}`}>
                  {analysisResult.confidence}% Confidence
                </span>
              </div>
              <p className={`text-lg ${isDarkMode ? 'text-golden-yellow' : 'text-earth-brown'}`}>
                {analysisResult.disease}
              </p>
            </div>

            <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-deep-charcoal' : 'bg-soft-white'}`}>
              <h3 className="text-xl font-semibold mb-4">Recommended Treatment</h3>
              <p className={isDarkMode ? 'text-golden-yellow' : 'text-earth-brown'}>
                {analysisResult.treatment}
              </p>
            </div>

            <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-deep-charcoal' : 'bg-soft-white'}`}>
              <h3 className="text-xl font-semibold mb-4">Prevention Tips</h3>
              <ul className="space-y-2">
                {analysisResult.prevention.map((tip, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className={`w-5 h-5 mt-0.5 flex-shrink-0
                      ${isDarkMode ? 'text-bright-green' : 'text-lush-green'}`} />
                    <span className={isDarkMode ? 'text-golden-yellow' : 'text-earth-brown'}>
                      {tip}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {error && (
        <div className={`mt-4 p-4 rounded-lg flex items-center gap-2
          ${isDarkMode ? 'bg-fiery-red/20 text-fiery-red' : 'bg-rich-red/20 text-rich-red'}`}>
          <AlertCircle className="w-5 h-5" />
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default CropAnalysis;