const DarkTheme = () => {
    return (
        <style jsx global>
            {`
 @import "/node_modules/devextreme/dist/css/dx.material.orange.dark.css";

      `}
        </style>
    );
};

const LightTheme = () => {
    return (
        <style jsx global>
            {`
     @import "/node_modules/devextreme/dist/css/dx.material.orange.light.css";
      `}
        </style>
    );
};

export default function Theme({ theme }) {
    if (theme == "dark") {
        return <DarkTheme />;
    }
    return <LightTheme />;
}