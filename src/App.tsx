import React from "react";
import "./main.global.scss";
import {hot} from "react-hot-loader/root";
import { Layout } from "./shared/Layout";
import { Header } from "./shared/Layout/Header";
import { Content } from "./shared/Layout/Content";
import { CardsList } from "./shared/Layout/CardsList";

function AppComponent() {
    return (
        <Layout>
            <Header />
            <Content>
                <CardsList/>
            </Content>
        </ Layout >
    );
}

export const App = hot(AppComponent);