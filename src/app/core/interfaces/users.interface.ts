export interface TblAdverestigTypePrpertyTypeList {
  adverId: number;
  propType: number;
  discription: string;
}

export interface AdverstisingType {
  id: number;
  name: string;
  dicription: string;
  tblAdverestigTypePrpertyTypeList: TblAdverestigTypePrpertyTypeList[];
  tblProperty: any[];
}

export interface Cooling {
  id: number;
  name: string;
  dicription: string;
  tblProperty: any[];
}

export interface Heating {
  id: number;
  name: string;
  dicription: string;
  tblProperty: any[];
}

export interface OwningTypeNavigation {
  id: number;
  name: string;
  dicription: string;
  tblProperty: any[];
}

export interface TblAdverestigTypePrpertyTypeList2 {
  adverId: number;
  propType: number;
  discription: string;
}

export interface Option {
  id: number;
  name: string;
  discription: string;
  tblPropTypeTblOption: any[];
}

export interface TblPropTypeTblOption {
  propTypeId: number;
  optionId: number;
  dscription: string;
  option: Option;
}

export interface Type {
  id: number;
  name: string;
  dicription: string;
  tblAdverestigTypePrpertyTypeList: TblAdverestigTypePrpertyTypeList2[];
  tblPropTypeTblOption: TblPropTypeTblOption[];
  tblProperty: any[];
}

export interface User {
  id: number;
  roleId: string;
  name: string;
  lastName: string;
  phone: string;
  imageUrl: string;
  agencyName: string;
  address: string;
  location: string;
  businessLicenseImage: string;
  tel: string;
  email: string;
  dateCreated: Date;
  lastModified: Date;
  token: string;
  smscode: string;
  smssendTime: Date;
  isReal: boolean;
  tblProperty: any[];
}

export interface RootObject {
  id: string;
  typeId: number;
  owningType: number;
  area: number;
  age: string;
  pricePerMeter: number;
  isAgreedPrice: boolean;
  totalPrice: number;
  coolingId: number;
  heatingId: number;
  floor: string;
  totalFloor: string;
  isBalcony: boolean;
  isWater: boolean;
  isElectericity: boolean;
  isGas: boolean;
  tel: number;
  isEvolator: boolean;
  isParking: boolean;
  wareHouse: number;
  province: string;
  city: string;
  district: string;
  isOwnershipDoc: boolean;
  roomCount: number;
  lightPossition: number;
  isSwimmingPool: boolean;
  isSauna: boolean;
  isJacuzzi: boolean;
  isSportsHall: boolean;
  isYard: boolean;
  isProductionLicense: boolean;
  productedArea: number;
  isAskFor: boolean;
  adverstisingTypeId: number;
  adverstisingDiscription: string;
  dateCreated: string;
  lastModified: string;
  expireDate: string;
  adverstisingTopic: string;
  isPublishedAdverstising: boolean;
  location: string;
  userId: number;
  image1Url: string;
  image2Url: string;
  image3Url: string;
  image4Url: string;
  image5Url: string;
  address: string;
}
