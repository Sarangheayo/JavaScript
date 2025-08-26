class MyClass {
    // public : 클래스 내외부 어디서든 접근 가능
    name = 'hong'; 
    // private : 클래스 내부에서만 접근 가능
    #age = 20;
    // protected : 상속관계에서 '내부 클래스(나)'와 '자식 클래스'들은 접근이 가능
    _addr = 'dggdgsddfs';
    static gender = 'M'; 

    // 생성자 메소드(특별함 이름 무조건 'constructor')
    // 'new' 키워드로 객체를 인스턴스화 할 때 딱 한 번 실행되는 메소드
    constructor(name, age, addr) {
      this.name = name; //객체 내에서 사용하는 나 자신 =this
      this.#age = age;
      this._addr = addr;
    }

    ///getter / setter
    get age() {
        return this.#age;
    }
    set age(age) {
        this.#age = age;
    }

    // 인스턴스 메소드(일반적임)

    add(a, b) {
        return a + b;
    }
}

const myClass = new MyClass('홍길동', 20, '조선'); //class
const myClass2 = new MyClass('갑순이', 10, '한국');
console.log(myClass.age);
myClass.age = 40;
console.log(myClass.age);
console.log(myClass2.name);