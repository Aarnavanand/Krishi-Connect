import React, { useState, useEffect } from 'react';
import { useMarketStore } from '../stores/marketStore';
import { useAuthStore } from '../stores/authStore';
import { Plus, X, Loader } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NewCropForm {
  name: string;
  price: string;
  quantity: string;
  unit: string;
  location: string;
}

function Marketplace() {
  const { isDarkMode } = useTheme();
  const { crops, fetchCrops, addCrop } = useMarketStore();
  const { user } = useAuthStore();
  const [showNewCropModal, setShowNewCropModal] = useState(false);
  const [newCrop, setNewCrop] = useState<NewCropForm>({
    name: '',
    price: '',
    quantity: '',
    unit: 'Kilogram (kg)',
    location: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchCrops();
  }, [fetchCrops]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await addCrop({
        ...newCrop,
        price: parseFloat(newCrop.price),
        quantity: parseFloat(newCrop.quantity),
        userId: user?.id || ''
      });
      setShowNewCropModal(false);
      setNewCrop({
        name: '',
        price: '',
        quantity: '',
        unit: 'Kilogram (kg)',
        location: ''
      });
    } catch (error) {
      console.error('Error adding crop:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className={`text-3xl font-bold ${isDarkMode ? 'text-neon-green' : 'text-farm-green'}`}>
          Marketplace
        </h1>
        <button
          onClick={() => setShowNewCropModal(true)}
          className={`flex items-center gap-2 px-4 py-2 rounded-md ${
            isDarkMode 
              ? 'bg-neon-green hover:bg-muted-olive text-dark-earth-brown' 
              : 'bg-farm-green hover:bg-muted-green text-white'
          }`}
        >
          <Plus className="w-5 h-5" />
          List New Crop
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {crops.map((crop) => (
          <div key={crop.id} className={`p-6 rounded-lg shadow-md ${
            isDarkMode ? 'bg-dark-earth-brown text-light-gray' : 'bg-golden-beige text-earth-brown'
          }`}>
            <div className="flex justify-between items-start mb-4">
              <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-neon-green' : 'text-farm-green'}`}>
                {crop.name}
              </h2>
              <span className={`px-2 py-1 rounded-full text-sm ${
                isDarkMode ? 'bg-muted-olive text-light-gray' : 'bg-muted-green text-earth-brown'
              }`}>
                Available
              </span>
            </div>
            
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Price</span>
                <span className={`font-medium ${isDarkMode ? 'text-warm-amber' : 'text-harvest-orange'}`}>
                  ₹{crop.price}/{crop.unit}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Quantity</span>
                <span>{crop.quantity} {crop.unit}</span>
              </div>
              <div className="flex justify-between">
                <span>Location</span>
                <span>{crop.location}</span>
              </div>
            </div>

            <button className={`w-full py-2 px-4 rounded-md transition-colors ${
              isDarkMode 
                ? 'bg-neon-green hover:bg-muted-olive text-dark-earth-brown' 
                : 'bg-farm-green hover:bg-muted-green text-white'
            }`}>
              Place Order
            </button>
          </div>
        ))}
      </div>

      {showNewCropModal && (
        <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ${
          isDarkMode ? 'text-light-gray' : 'text-earth-brown'
        }`}>
          <div className={`rounded-lg p-6 max-w-md w-full mx-4 ${
            isDarkMode ? 'bg-dark-earth-brown' : 'bg-golden-beige'
          }`}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">List New Crop</h2>
              <button
                onClick={() => setShowNewCropModal(false)}
                className={`hover:bg-opacity-20 p-1 rounded-full ${
                  isDarkMode 
                    ? 'text-warm-amber hover:bg-warm-amber' 
                    : 'text-harvest-orange hover:bg-harvest-orange'
                }`}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Crop Name
                </label>
                <input
                  type="text"
                  className={`w-full px-3 py-2 border rounded-md ${
                    isDarkMode 
                      ? 'bg-muted-olive border-dark-earth-brown text-light-gray' 
                      : 'bg-muted-green border-golden-beige text-earth-brown'
                  }`}
                  value={newCrop.name}
                  onChange={(e) => setNewCrop({ ...newCrop, name: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Price
                </label>
                <input
                  type="number"
                  className={`w-full px-3 py-2 border rounded-md ${
                    isDarkMode 
                      ? 'bg-muted-olive border-dark-earth-brown text-light-gray' 
                      : 'bg-muted-green border-golden-beige text-earth-brown'
                  }`}
                  value={newCrop.price}
                  onChange={(e) => setNewCrop({ ...newCrop, price: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Quantity
                </label>
                <input
                  type="number"
                  className={`w-full px-3 py-2 border rounded-md ${
                    isDarkMode 
                      ? 'bg-muted-olive border-dark-earth-brown text-light-gray' 
                      : 'bg-muted-green border-golden-beige text-earth-brown'
                  }`}
                  value={newCrop.quantity}
                  onChange={(e) => setNewCrop({ ...newCrop, quantity: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Unit
                </label>
                <select
                  value={newCrop.unit}
                  onChange={(e) => setNewCrop({ ...newCrop, unit: e.target.value })}
                  className={`w-full px-3 py-2 border rounded-md ${
                    isDarkMode 
                      ? 'bg-muted-olive border-dark-earth-brown text-light-gray' 
                      : 'bg-muted-green border-golden-beige text-earth-brown'
                  }`}
                >
                  <option value="Kilogram (kg)">Kilogram (kg)</option>
                  <option value="Gram (g)">Gram (g)</option>
                  <option value="Ton (t)">Ton (t)</option>
                  <option value="Quintal (q)">Quintal (q)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Location
                </label>
                <input
                  type="text"
                  className={`w-full px-3 py-2 border rounded-md ${
                    isDarkMode 
                      ? 'bg-muted-olive border-dark-earth-brown text-light-gray' 
                      : 'bg-muted-green border-golden-beige text-earth-brown'
                  }`}
                  value={newCrop.location}
                  onChange={(e) => setNewCrop({ ...newCrop, location: e.target.value })}
                  required
                />
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowNewCropModal(false)}
                  className={`px-4 py-2 text-sm font-medium rounded-md ${
                    isDarkMode 
                      ? 'text-light-gray hover:bg-muted-olive' 
                      : 'text-earth-brown hover:bg-muted-green'
                  }`}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className={`px-4 py-2 text-sm font-medium text-white rounded-md ${
                    isDarkMode 
                      ? 'bg-neon-green hover:bg-muted-olive' 
                      : 'bg-farm-green hover:bg-muted-green'
                  }`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? <Loader className="animate-spin" /> : 'Add Crop'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Marketplace;