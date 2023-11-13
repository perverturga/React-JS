import {configureStore} from "@reduxjs/toolkit"
import cardReducer from "./control/cardSlice"

export const store = configureStore({
    reducer: {
        //tanımlayacağım şeyleri reducer da yapıcam
        // projenin tanıması için ana kapsayıcı yani index.js e geçiçcem
        // card: cardReducer,
        // card diye herhangi bi isim verdim . Value su import edilen değere eşit olcak
        // ana uygulamamın merkezi yönetimi store js de
        // dallara create slice la ayırıyoruz
        // cartımı cartreducerla kontrol edicem
        // movies le alkalaı olsaydı movies: movieReducer diyip bi reducer daha açıcaktık
        
        card: cardReducer,
    },
});