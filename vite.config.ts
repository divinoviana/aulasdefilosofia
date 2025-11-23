import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Carrega variáveis de ambiente baseadas no modo atual (ex: .env)
  const env = loadEnv(mode, '.', '');
  
  return {
    plugins: [react()],
    base: './',
    define: {
      // Injeta a API Key de forma segura no build para o cliente
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    }
  };
});