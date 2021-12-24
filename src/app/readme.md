some syntax must to know

property
-   public: myProperty
-   private: _myProperty
function
-   public: MyFunction
-   priate: _MyFunction
enum
export enum MY_ENUM {
    VALUE_1
}

function alway have type to return if not set void
example
public GetId() : number {
    return 1;
}
public HandleId() : void {

}

NOTE
-   name of property or function is have meaning not test, list, ...

avoid to use type any for property