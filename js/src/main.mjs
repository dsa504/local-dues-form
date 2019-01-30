import Vue from "../../node_modules/vue/dist/vue.esm.browser.js";
import LineItem from "./lineItem.mjs" 

const availableLineItems = [
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

const duesSchedule = [
    {
        min: 0,
        max: 750,
        dues: 3
    },
    {
        min: 750,
        max: 1500,
        dues: 8
    },
    {
        min: 1500,
        max: 3000,
        dues: 15
    },
    {
        min: 3000,
        max: 4000,
        dues: 40,
    },
    {
        min: 4000,
        max: Infinity,
        dues: 75
    }
];

const duesVm = new Vue({
    el: "#app",
    components: {
        LineItem,
    },
    data: {
        presets: {
            availableLineItems,
        },
        monthlyIncome: null,
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
        lineItems: [
            {
                type: "Chapter Dues",
                amount: 0,
            },
        ],
        oneTimeOnly: false,
        
    },
    computed: {
        suggestedDues() {
            const mi = this.monthlyIncome;
            if (mi === null) return null;

            if (mi < 0) return null;

            return duesSchedule
                .find(x => mi >= x.min && mi < x.max)
                .dues;
        }
    }
});

window.duesVm = duesVm;