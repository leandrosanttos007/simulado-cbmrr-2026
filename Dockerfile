# Stage: Lightweight production Nginx web server
FROM nginx:alpine

LABEL maintainer="leandrosanttos007"
LABEL description="Simulado Interativo CBMRR 2026 • Soldado Combatente (Banca IDECAN)"

# Custom Nginx configuration with Gzip compression
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Static web files
COPY index.html styles.css app.js questions.js /usr/share/nginx/html/
COPY data/ /usr/share/nginx/html/data/

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost:80/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
