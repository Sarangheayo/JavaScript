class Mammal {
     _name;
   _residence;

   constructor(name, residence) {
    this._name = name;
    this._residence = residence;
   }

   breath() {
    console.log(`${this._name}가 폐호흡합니다.`);
   }
}


class Whale extends Mammal {
   constructor(name, residence){
     super(name, residence); //부모 객체의 메소드들을 다불러오는 것
   }

   //overriding : 메소드 값과 (param 값) 맞춰줘야 오버라이딩 가능.
   breath() {
     console.log(`눈누난나`);
   }

   swimming() {
     console.log(`${this._name}가 헤엄칩니다.`);
   }
}

class FlyingSquirrel extends Mammal {
   constructor(name, residence){
     super(name, residence); //부모 객체의 메소드들을 다불러오는 것
   }

   flying() {
     console.log(`${this._name}가 날아갑니다.`);
   }
}

const whale = new Whale('고래', '바다');
whale.breath();

//JS prototype 문법을 이해해야 정립가능 or 다른 언어의 class 문법을 보세용// 