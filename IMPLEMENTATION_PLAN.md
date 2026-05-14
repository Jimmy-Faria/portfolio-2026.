# Plano de Implementação: Portfolio Estilo Minimalista (Ricardo Torres)

Este plano detalha os passos para transformar o teu actual portfolio num design sofisticado, focado em tipografia e "white space", ideal para o mercado internacional.

## 1. Identidade Visual (Design System)
*   **Cores:** Substituir o preto `#000000` por um off-white `#fcfcfc` (Fundo) e cinza escuro `#1a1a1a` (Texto).
*   **Tipografia:** 
    *   **Títulos:** Usar a fonte Serif que o Next.js já tem ou importar uma (ex: Playfair Display ou manter Inter com peso leve/itálico).
    *   **Corpo:** Inter ou Geist com tracking (espaçamento entre letras) mais aberto.
*   **Animações:** Mudar de "pops" e "scales" para transições suaves de opacidade e deslizes de 20px (y: 20 -> 0).

## 2. Reestruturação de Componentes (Fases)

### Fase 1: Fundação (CSS & Layout)
*   [ ] Limpar animações pesadas no `globals.css`.
*   [ ] Definir a nova escala de cores e suavizar o scroll.
*   [ ] Remover elementos "gamer" como círculos flutuantes e backgrounds mesh complexos.

### Fase 2: Hero Section (O Cartão de Visita)
*   [ ] Alterar o título para algo mais limpo (ex: Nome em destaque, Profissão em Itálico).
*   [ ] Substituir botões "solid" por links elegantes com "hover underline".
*   [ ] Dar mais ar (padding/margin) a toda a secção.

### Fase 3: Navbar & Footer
*   [ ] Tornar a Navbar minimalista (blur discreto em vez de bordas fortes).
*   [ ] Footer simples com foco em links sociais e email.

### Fase 4: Grelha de Projetos
*   [ ] Mudar de cards com sombras para uma lista mais "editorial" ou cards com bordas quase invisíveis.
*   [ ] Focar em imagens de alta qualidade ou mockups limpos.

## 3. Próximos Passos Imediatos
1.  **Executar a limpeza do `globals.css`** (já iniciada).
2.  **Refazer o `Hero.tsx`** para remover o estilo "holograma".
3.  **Ajustar a `Navbar.tsx`** para o novo esquema de cores claras.

---
**Jimmy, queres que comece a aplicar a Fase 1 e 2 agora mesmo?**