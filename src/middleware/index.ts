import { PUBLIC_ROUTES } from "@constants/shared";

export const onRequest = (context, next) => {
    console.log('---------------');
    console.log('---------------');
    console.log('---------------');
    console.log('---------------');
    console.log('---------------');
    console.log(context.request);
    /* console.log(context);
    console.log(context.url.pathname); */
    /* if (context.cookies.has("test")) {
        console.log('hola', context.cookies.get("Test"));
    } */
    /* console.log('Ya pasó por aquí'); */
    /* if (PUBLIC_ROUTES.includes(context.url.pathname)) {
        return next();
    } */
    return next();
    /* context.redirect('/home'); */

    /* return Response.redirect(null, 404); */
};