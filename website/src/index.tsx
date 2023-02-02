import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {QueryClient, QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";
import {ProjectPanel} from "./components/project_panel/ProjectPanel";
import {TitleText} from "./components/title_text/TitleText";
import {CVTable} from "./components/cv_table/CVTable";
import {SkillsComponent} from "./components/skills_component/SkillsComponent";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const queryClient = new QueryClient()

root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <TitleText/>
            <SkillsComponent/>
            <CVTable/>
            <ProjectPanel/>
            <ReactQueryDevtools/>
        </QueryClientProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
