import { useEffect, useState } from 'react';
import { Mic, MicOff, Home, ShoppingBag, Cloud, User, Settings, HelpCircle, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useAuthStore } from '../stores/authStore';

const VoiceAssistant = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [showCommands, setShowCommands] = useState(false);
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();
  const { logout } = useAuthStore();

  useEffect(() => {
    let recognition: any = null;
    
    if ('webkitSpeechRecognition' in window) {
      // @ts-ignore
      recognition = new window.webkitSpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      recognition.onstart = () => setIsListening(true);
      recognition.onend = () => setIsListening(false);
      
      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setTranscript(transcript);
        handleNavigation(transcript.toLowerCase());
      };
    }

    return () => {
      if (recognition) {
        recognition.stop();
      }
    };
  }, []);

  const handleNavigation = (command: string) => {
    const commands = [
      { 
        keywords: ['dashboard', 'home', 'main', 'start'], 
        path: '/dashboard',
        icon: <Home className="w-4 h-4" />,
        label: 'Dashboard'
      },
      { 
        keywords: ['market', 'marketplace', 'buy', 'sell', 'crops'], 
        path: '/marketplace',
        icon: <ShoppingBag className="w-4 h-4" />,
        label: 'Marketplace'
      },
      { 
        keywords: ['weather', 'forecast', 'climate'], 
        path: '/weather',
        icon: <Cloud className="w-4 h-4" />,
        label: 'Weather'
      },
      { 
        keywords: ['profile', 'account', 'my profile'], 
        path: '/profile',
        icon: <User className="w-4 h-4" />,
        label: 'Profile'
      },
      { 
        keywords: ['settings', 'preferences', 'configuration'], 
        path: '/settings',
        icon: <Settings className="w-4 h-4" />,
        label: 'Settings'
      },
      { 
        keywords: ['help', 'support', 'assistance'], 
        path: '/help',
        icon: <HelpCircle className="w-4 h-4" />,
        label: 'Help'
      },
      { 
        keywords: ['logout', 'sign out', 'log out', 'exit'], 
        action: () => handleLogout(),
        icon: <LogOut className="w-4 h-4" />,
        label: 'Logout'
      }
    ];

    const matchedCommand = commands.find(cmd => 
      cmd.keywords.some(keyword => command.includes(keyword))
    );

    if (matchedCommand) {
      if (matchedCommand.path) {
        navigate(matchedCommand.path);
        speak(`Navigating to ${matchedCommand.label}`);
      } else if (matchedCommand.action) {
        matchedCommand.action();
        speak(`Executing ${matchedCommand.label}`);
      }
    } else {
      speak('Sorry, I didn\'t understand that command.');
      setShowCommands(true);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    }
  };

  const toggleListening = () => {
    // @ts-ignore
    const recognition = new window.webkitSpeechRecognition();
    recognition.start();
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end gap-2">
      {showCommands && (
        <div className={`p-4 rounded-lg shadow-lg mb-2 ${
          isDarkMode ? 'bg-dark-earth-brown text-light-gray' : 'bg-golden-beige text-earth-brown'
        }`}>
          <h3 className="font-semibold mb-2">Available Commands:</h3>
          <ul className="space-y-1">
            <li>• "Go to dashboard"</li>
            <li>• "Open marketplace"</li>
            <li>• "Show me the weather"</li>
            <li>• "Take me to settings"</li>
            <li>• "I need help"</li>
            <li>• "Log me out"</li>
          </ul>
        </div>
      )}

      <div 
        className={`p-4 rounded-lg shadow-lg flex items-center space-x-2 cursor-pointer transition-all ${
          isDarkMode 
            ? 'bg-muted-olive hover:bg-dark-earth-brown text-light-gray' 
            : 'bg-muted-green hover:bg-golden-beige text-earth-brown'
        }`}
        onClick={toggleListening}
      >
        {isListening ? (
          <Mic className={`w-5 h-5 ${isDarkMode ? 'text-neon-green' : 'text-farm-green'}`} />
        ) : (
          <MicOff className={`w-5 h-5 ${isDarkMode ? 'text-neon-green' : 'text-farm-green'}`} />
        )}
        <span>{isListening ? 'Listening...' : 'Voice Assistant'}</span>
      </div>
    </div>
  );
};

export default VoiceAssistant;