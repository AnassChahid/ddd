export class Contact {

  id!: number;
  fullname!: {
    type: string,
    required: true
  };
  email!: {
    type: string,
    required: true
  };
  subject!: {
    type: string,
    required: true
  };
  message!: {
    type: string,
    required: true
  };
}
