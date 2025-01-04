declare module '*.scss' {
   interface IClassNames {
      [className: string]: string;
   }
   const classNames: IClassNames;
   export = classNames;
}

declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';

declare module '*.svg' {
   const svg: React.FunctionComponent<
      React.SVGAttributes<SVGAElement>
   >;
   export default svg;
}
