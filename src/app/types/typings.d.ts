declare module '*.scss' {
  type IClassNames = Record<string, string>
  const classNames: IClassNames;
  export = classNames
}

declare module "*.jpg" 
declare module "*.jpeg" 
declare module "*.png" 

declare module '*.svg' {
  const svg: React.FunctionComponent<React.SVGAttributes<SVGAElement>>;
  export default svg;
}
