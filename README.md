
export class SideBarComponent {

  public payPalConfig?: IPayPalConfig;
  couponCode!: string;
  discountValue!: number;

  constructor(private couponService: CouponService) { }


  ngOnInit(): void {
    this.initConfig();
}
  private initConfig(): void {
    this.payPalConfig = {
        currency: 'EUR',
        clientId: 'sb', // Replace with your actual PayPal client ID
        createOrderOnClient: (data) => <ICreateOrderRequest>{
            intent: 'CAPTURE',
            purchase_units: [
                {
                    amount: {
                        currency_code: 'EUR',
                        value: '9.99',
                        breakdown: {
                            item_total: {
                                currency_code: 'EUR',
                                value: '9.99'
                            }
                        }
                    },
                    items: [
                        {
                            name: 'Enterprise Subscription',
                            quantity: '1',
                            category: 'DIGITAL_GOODS',
                            unit_amount: {
                                currency_code: 'EUR',
                                value: '9.99',
                            },
                        }
                    ]
                }
            ]
        },
        advanced: { commit: 'true' },
        style: { label: 'paypal', layout: 'vertical' },
        onApprove: (data, actions) => {
            console.log('Transaction approved (not authorized)', data, actions);
            actions.order.get().then((details: any) => {
                console.log('Full order details:', details);
            });
        },
        onClientAuthorization: (data) => {
            console.log('Transaction completed on client side', data);
            // You can inform your server about the completed transaction here
        },
        onCancel: (data, actions) => {
            console.log('Transaction cancelled', data, actions);
        },
        onError: err => {
            console.log('Error:', err);
        },
        onClick: (data, actions) => {
            console.log('Button clicked', data, actions);
        }
    };
}






<ngx-paypal [config]="payPalConfig"></ngx-paypal>
