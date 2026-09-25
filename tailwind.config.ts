import type {Config} from 'tailwindcss';
export default {content:['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'],theme:{extend:{colors:{ink:'#101828',brand:'#2563eb',cyan:'#06b6d4',surface:'#f8fafc'},boxShadow:{soft:'0 12px 40px rgba(15,23,42,.08)'}}},darkMode:'class',plugins:[]} satisfies Config;
