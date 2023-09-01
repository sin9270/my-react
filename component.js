import { createElement, render } from "./react.js";

/** @jsx createElement */
const element = (
    <div id="sbg">
        ソフトバンクグループ
        <div id="sb">
            ソフトバンク
            <div id="zhd">
                Zホールディングス
                <div id="line">
                    LINE
                </div>
                <div id="yahoo">
                    Yahoo
                </div>
            </div>
            <div id="paypay">
                PayPay
            </div>
            <div id="line-yahoo">
                <div id="tbd"></div>
            </div>
        </div>
    </div>
);

const root = document.getElementById("root");
render(element, root);
