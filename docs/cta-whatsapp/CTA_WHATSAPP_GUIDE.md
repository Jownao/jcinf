# Sistema de CTA (Call-to-Action) WhatsApp - JCINF

## Estrutura

### 1. Função Utilitária: `getWhatsAppLink()`

**Arquivo:** `src/utils/whatsapp.ts`

```typescript
import { getWhatsAppLink, getServiceLabel } from "@/utils/whatsapp";

// Gera link com mensagem pré-preenchida
const siteLink = getWhatsAppLink("site");
// Retorna: https://wa.me/5579981423483?text=Olá!%20Vim%20pelo%20site%20...

const botLink = getWhatsAppLink("bot");
// Retorna: https://wa.me/5579981423483?text=Olá!%20Vim%20pelo%20site%20...

const bioLink = getWhatsAppLink("bio");
// Retorna: https://wa.me/5579981423483?text=Olá!%20Vim%20pelo%20site%20...

// Obter label do serviço
const label = getServiceLabel("site"); // "Criar um Site"
```

**Serviços disponíveis:**

- `"site"` - Sites profissionais
- `"bot"` - Automação WhatsApp
- `"bio"` - Link na bio
- `"default"` - Mensagem genérica

---

## 2. Componentes de Botão

### `CTAButton` (Base)

**Arquivo:** `src/components/CTA/CTAButton.tsx`

Componente base que renderiza um botão com ícone do WhatsApp.

**Props:**

```typescript
interface CTAButtonProps {
  service: "site" | "bot" | "bio" | "default";
  label: string;
  variant?: "primary" | "secondary" | "white";
  size?: "sm" | "md" | "lg";
  className?: string;
}
```

**Exemplo:**

```tsx
import CTAButton from "@/components/CTA/CTAButton";

export default function MyComponent() {
  return (
    <CTAButton
      service="site"
      label="Criar um Site"
      variant="primary"
      size="lg"
    />
  );
}
```

---

### Botões Específicos

**Arquivo:** `src/components/CTA/index.tsx`

#### `SiteButton`

```tsx
import { SiteButton } from "@/components/CTA";

export default function Example() {
  return <SiteButton size="lg" />;
  // Renderiza: "Criar um Site" com mensagem pré-preenchida
}
```

#### `BotButton`

```tsx
import { BotButton } from "@/components/CTA";

export default function Example() {
  return <BotButton size="md" />;
  // Renderiza: "Automação WhatsApp" com mensagem pré-preenchida
}
```

#### `BioButton`

```tsx
import { BioButton } from "@/components/CTA";

export default function Example() {
  return <BioButton size="sm" />;
  // Renderiza: "Link na Bio" com mensagem pré-preenchida
}
```

#### `DefaultCTAButton`

```tsx
import { DefaultCTAButton } from "@/components/CTA";

export default function Example() {
  return (
    <DefaultCTAButton
      label="Falar no WhatsApp"
      size="lg"
    />
  );
}
```

---

## 3. Estilos de Variante

| Variante | Uso | Classes |
|----------|-----|---------|
| `primary` | Botões principais (azul) | `bg-[#2563EB]` |
| `secondary` | Botões secundários (verde) | `bg-[#25D366]` |
| `white` | Botões com fundo branco | `bg-white` |

---

## 4. Tamanhos

| Size | Padding | Font | Uso |
|------|---------|------|-----|
| `sm` | `px-4 py-2` | `text-xs` | Cards, links |
| `md` | `px-6 py-2.5` | `text-sm` | Padrão |
| `lg` | `px-8 py-3.5` | `text-base` | CTAs destacadas |

---

## 5. Exemplos de Uso nos Componentes

### Hero

```tsx
import { SiteButton } from "@/components/CTA";

export default function Hero() {
  return (
    <section>
      <div className="flex gap-4">
        <SiteButton size="lg" />
        <a href="#portfolio">Ver Portfólio</a>
      </div>
    </section>
  );
}
```

### Servicos (Cards)

```tsx
interface ServiceCardProps {
  icon: string;
  title: string;
  desc: string;
  service?: "site" | "bot" | "bio";
}

function ServiceCard({ icon, title, desc, service }: ServiceCardProps) {
  const renderCTAButton = () => {
    switch (service) {
      case "site":
        return <SiteButton size="sm" />;
      case "bot":
        return <BotButton size="sm" />;
      case "bio":
        return <BioButton size="sm" />;
      default:
        return <DefaultCTAButton label="Saber mais" size="sm" />;
    }
  };

  return (
    <div className="card">
      <span>{icon}</span>
      <h3>{title}</h3>
      <p>{desc}</p>
      <div>{renderCTAButton()}</div>
    </div>
  );
}
```

### Contato

```tsx
import { DefaultCTAButton } from "@/components/CTA";

export default function Contato() {
  return (
    <section>
      <h2>Vamos conversar?</h2>
      <DefaultCTAButton label="Falar no WhatsApp" size="lg" />
    </section>
  );
}
```

### Footer

```tsx
import { DefaultCTAButton } from "@/components/CTA";

export default function Footer() {
  return (
    <footer>
      <nav>...</nav>
      <DefaultCTAButton label="Falar agora" size="sm" />
      <p>© 2024 JCINF</p>
    </footer>
  );
}
```

---

## 6. Recursos

✅ **TypeScript tipado** - Type-safe em todo o projeto

✅ **Framer Motion** - Animações hover e tap

✅ **Tailwind CSS** - Estilos responsivos

✅ **Acessibilidade** - Atributos `aria-label` e `rel`

✅ **Dinâmico** - Mensagens por serviço

✅ **Reutilizável** - Componentes em múltiplas seções

---

## 7. Customização

### Alterar número do WhatsApp

**Arquivo:** `src/utils/whatsapp.ts`

```typescript
const WA_PHONE = "5579981423483"; // Altere aqui
```

### Alterar mensagens

**Arquivo:** `src/utils/whatsapp.ts`

```typescript
const WA_MESSAGES: Record<string, string> = {
  site: "Sua mensagem customizada...",
  // ...
};
```

### Adicionar novo tipo de serviço

1. Adicione em `WA_MESSAGES`:

```typescript
const WA_MESSAGES = {
  site: "...",
  bot: "...",
  bio: "...",
  consultoria: "Olá! Quero contratar uma consultoria...", // Novo
};
```

2. Crie um novo componente em `src/components/CTA/index.tsx`:

```typescript
export function ConsultoriaButton({
  size = "md",
  className = "",
}: {
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  return (
    <CTAButton
      service="consultoria"
      label="Consultoria"
      variant="primary"
      size={size}
      className={className}
    />
  );
}
```

3. Use em qualquer lugar:

```tsx
import { ConsultoriaButton } from "@/components/CTA";

<ConsultoriaButton size="lg" />
```

---

## 8. Fluxo de Dados

```
getWhatsAppLink("site")
    ↓
Busca mensagem em WA_MESSAGES["site"]
    ↓
Encoda com encodeURIComponent
    ↓
Retorna URL formatada
    ↓
CTAButton usa a URL
    ↓
Usuário clica
    ↓
Abre WhatsApp em nova aba
```

---

## ✨ Pronto para Usar!

Todos os componentes estão integrados e prontos para uso em produção.
