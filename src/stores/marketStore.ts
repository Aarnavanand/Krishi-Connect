import { create } from 'zustand';
import axios from 'axios';

interface Crop {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  unit: string;
  location: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}

interface MarketState {
  crops: Crop[];
  loading: boolean;
  error: string | null;
  fetchCrops: () => Promise<void>;
  addCrop: (crop: Omit<Crop, 'id' | 'createdAt' | 'updatedAt' | 'createdBy' | 'description'>) => Promise<void>;
}

export const useMarketStore = create<MarketState>((set, get) => ({
  crops: [],
  loading: false,
  error: null,
  fetchCrops: async () => {
    try {
      set({ loading: true });
      
      // Get the auth token from localStorage
      const token = localStorage.getItem('auth_token');
      
      if (!token) {
        throw new Error('Authentication token not found. Please log in again.');
      }
      
      // Include the token in the request headers
      const response = await axios.get('/api/crops', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      set({ crops: response.data, error: null });
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'An error occurred' });
    } finally {
      set({ loading: false });
    }
  },
  addCrop: async (crop) => {
    try {
      set({ loading: true });
      
      // Get the auth token from localStorage
      const token = localStorage.getItem('auth_token');
      if (!token) {
        throw new Error('Authentication token not found. Please log in again.');
      }
      
      // Add a default description since it's required in the backend model
      const cropWithDescription = {
        ...crop,
        description: `${crop.name} - ${crop.quantity} ${crop.unit} available at ${crop.location}`
      };
      
      // Add this to the addCrop function
      await axios.post('/api/crops/create', cropWithDescription, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      // Refresh the crops list after adding a new crop
      const fetchCrops = get().fetchCrops;
      await fetchCrops();
    } catch (error) {
      console.error('Error adding crop:', error);
      set({ error: error instanceof Error ? error.message : 'An error occurred' });
    } finally {
      set({ loading: false });
    }
  },
}));