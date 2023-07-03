declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.svg' {
  import React = require('react');

  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

declare module '*.png';
declare module '*.jpeg';
declare module '*.jpg';

declare const __IS_DEV__: boolean;
