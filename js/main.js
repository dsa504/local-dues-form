import Vue from "../node_modules/vue/dist/vue.esm.browser.js";
import "../node_modules/vue-material/dist/components.js";

const duesTypes = [
    "Chapter Dues",
    "DSA NOLA Fund",
    "Labor Standing",
    "Municipal Action",
    "Communications",
    "Technical",
    "Political Education",
    "Direct Service",
    "Healthcare For All",
] ;


const duesVm = new Vue({
    el: "#app",
    data: {
        presets: {
            duesTypes,
        },
        info: {
            firstName: "",
            lastName: "",
            email: "",
            billingAddress: "",
            city: "",
            state: "",
            zip: "",
            ccNumber: "",
            ccMonth: "",
            ccYear: "",
            ccSecurityCode: "",

        },
        contributions: [
            {
                type: "Chapter Dues",
                amount: 0,
            }
        ],
        monthly: false,
    },
});

window.duesVm = duesVm;