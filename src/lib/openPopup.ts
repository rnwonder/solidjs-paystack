
export const openPopup = (paystackArgs: Record<string, any>) => {
    // @ts-ignore
    const paystack = new window.PaystackPop();
    paystack.newTransaction(paystackArgs);
}
