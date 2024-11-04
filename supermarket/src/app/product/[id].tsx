import { Text } from "react-native";
import { Route, RouteProp, useRoute } from "@react-navigation/native";
import { Product } from "../../types/product";
import { CardDetails } from "../../components/detailsProduct/card";
import { MainLayout, PageLayout } from "../../components/layout";
import { H1 } from "../../components/textComponents";

type RouteParams = {
    params: {
        product : string;
    }
}
export default function ScreenDetailsProduct (){
    const route = useRoute<RouteProp<RouteParams, 'params' >>();
    const params = route.params;
    const product : Product | null = params && params.product ? JSON.parse(params.product) : null;

    if(!product){
        return <Text>Produto não encontrado.</Text>
    }

    return(
        <PageLayout>
            <MainLayout>
                <CardDetails key={product.id} product={product}/>
            </MainLayout>
        </PageLayout>
    );
}