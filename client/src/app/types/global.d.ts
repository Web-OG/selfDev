declare module '*.module.scss' {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module "*.svg" {
    import React from "react";
    const content: React.FunctionComponent<React.SVGProps<SVGElement>>;
    export default content;
}

declare const __CAPTCHA__: boolean




