import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Carrega variáveis de ambiente baseadas no modo atual (ex: .env local)
  // process.cwd() é mais seguro que '.' em ambientes de CI/CD como Vercel
  const env = loadEnv(mode, (process as any).cwd(), '');
  
  // Prioriza a variável do sistema (Vercel) sobre o arquivo .env
  const apiKey = process.env.API_KEY || env.API_KEY || "";

  return {
    plugins: [react()],
    base: './', // Caminho relativo garante que funcione no GitHub Pages e Vercel sem config extra
    define: {
      // Injeta a API Key de forma segura no build
      'process.env.API_KEY': JSON.stringify(apiKey)
    }
  };
});