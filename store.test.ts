import Store from "./store";

let store: Store;

describe("Store class", () => {
  beforeEach(() => {
    store = new Store();
  });

  test("should an throw error when we provide an empty path to setData function", () => {
    try {
      store.setData("", {});
    } catch (e) {
      expect(e.message).toEqual("[SET] : Empty path is incorrect");
    }
  });

  test("should throw an error when we provide an empty path to getData function", () => {
    try {
      store.getData("");
    } catch (e) {
      expect(e.message).toEqual("[GET] : Empty path is incorrect");
    }
  });

  test("should throw an error when we provide an incorrect path to getData function", () => {
    try {
      store.getData("thiskeyisincorrect");
    } catch (e) {
      expect(e.message).toEqual("[GET] : This path does not exist");
    }
  });

  test("should setData, getData and convert to jSON ", () => {
    const name = "Frank";
    const email = "frank.de@gmail.com";
    const age = 20;

    store.setData("user.name", name);
    store.setData("user.email", email);
    store.setData("user.age", age);

    const user = store.getData("user");

    expect(user.name).toEqual(name);
    expect(user.email).toEqual(email);
    expect(user.age).toEqual(age);

    const serializedData = store.toJSON();
    expect(serializedData).toEqual(
      '{"user":{"name":"Frank","email":"frank.de@gmail.com","age":20}}'
    );
  });
});
