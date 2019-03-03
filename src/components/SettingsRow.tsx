import * as React from 'react';

interface SettingsRowProps {
    className?: string;
}

export const SettingsRow: React.FunctionComponent<SettingsRowProps> = (props) => {
    return (
        <div className={`settings-row ${props.className}`}>
            {props.children}
        </div>
    );
}