<script lang="ts">
  export let fluid: boolean = false;
  export let href: string | undefined = undefined;
  export let color: 'primary' | 'secondary' = 'primary';
  export let overlay: string = '';
  export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
  export let type: 'button' | 'submit' = 'button';
  export let variant: 'filled' = 'filled';

  const baseStyles = `${
    fluid && 'w-full'
  } inline-flex justify-center items-center gap-2 rounded-md font-semibold transition-all`;

  const sizes = {
    xs: 'h-8 px-4 text-sm',
    sm: 'h-10 px-4 text-base',
    md: 'h-11 px-5 text-lg',
    lg: 'h-12 px-5 text-lg',
    xl: 'h-14 px-5 text-xl',
  };

  const variants = {
    filled: {
      primary:
        'bg-accent-500 text-white hover:bg-accent-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
      secondary: 'bg-secondary-500 text-white',
    },
  };

  const isExternalUrl = href?.startsWith('http');
  const isLink = !!href;

  const Component = isLink ? 'a' : 'button';
</script>

<svelte:element
  this={Component}
  {href}
  target={isExternalUrl ? '_blank' : '_self'}
  rel={isExternalUrl ? 'noreferrer' : ''}
  {type}
  class={`${baseStyles} ${sizes[size]} ${variants[variant][color]}`}
  data-hs-overlay={overlay}
>
  <slot name="left" />
  <slot />
  <slot name="right" />
</svelte:element>
