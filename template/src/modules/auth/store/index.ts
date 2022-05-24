import create from 'zustand';

type AuthState = {
  token: string; // don't keep in AsyncStorage
  setToken: (token: string) => void;
};

const useStore = create<AuthState>((set) => ({
  token: '',
  setToken: (token) => set({ token }),
}));

export default useStore;
