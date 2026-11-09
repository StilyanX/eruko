TEST_CASE("Empty list has length of zero",
          "[962d998c-c203-41e2-8fbd-85a7b98b79b9]") {
    simple_linked_list::List list{};
    REQUIRE(list.size() == 0);
}

TEST_CASE("Singleton list has length of one",
          "[9760262e-d7e4-4639-9840-87e2e2fbb115]") {
    simple_linked_list::List list{};
    list.push(1);
    REQUIRE(list.size() == 1);
}

TEST_CASE("Non-empty list has correct length",
          "[d9955c90-637c-441b-b41d-8cfb48e924a8]") {
    simple_linked_list::List list{};
    list.push(1);
    list.push(2);
    list.push(3);
    REQUIRE(list.size() == 3);
}

TEST_CASE("Pop from empty list is an error",
          "[0c3966db-58f9-4632-b94c-8ea13e54c2c8]") {
    simple_linked_list::List list{};
    REQUIRE_THROWS_AS(list.pop(), std::out_of_range);
}

TEST_CASE("Can pop from singleton list",
          "[a4f9d2e1-7425-49ef-9ee8-6c0cb3407cf0]") {
    simple_linked_list::List list{};
    list.push(1);
    REQUIRE(list.pop() == 1);
}

TEST_CASE("Can pop from non-empty list",
          "[6dcbb2c9-d98a-47bc-a010-9c19703d3ea2]") {
    simple_linked_list::List list{};
    list.push(1);
    list.push(2);
    REQUIRE(list.pop() == 2);
}

TEST_CASE("Can pop multiple items", "[e83aade9-f030-4096-aaf0-f9dc6491e6cf]") {
    simple_linked_list::List list{};
    list.push(1);
    list.push(2);
    REQUIRE(list.pop() == 2);
    REQUIRE(list.pop() == 1);
}

TEST_CASE("Pop updates the count", "[5c46bcf2-c0a9-4654-ae17-f3192436fcf1]") {
    simple_linked_list::List list{};
    list.push(1);
    list.push(2);
    REQUIRE(list.size() == 2);
    REQUIRE(list.pop() == 2);
    REQUIRE(list.size() == 1);
    REQUIRE(list.pop() == 1);
    REQUIRE(list.size() == 0);
}

TEST_CASE("Can push to an empty list",
          "[70d747a1-2e84-4ebc-bc3f-dcbee6a05f6b]") {
    simple_linked_list::List list{};
    REQUIRE_NOTHROW(list.push(1));
}

TEST_CASE("Can push to an empty list (initial values given)",
          "[f3197f0a-1fea-45a5-939f-4a5ea60387ec]") {
    simple_linked_list::List list{};
    REQUIRE_NOTHROW(list.push(1));
}

TEST_CASE("Can push to a non-empty list",
          "[391e332e-1f91-4033-b1e0-0e0c17812fa7]") {
    simple_linked_list::List list{};
    list.push(1);
    list.push(2);
    REQUIRE_NOTHROW(list.push(3));
}

TEST_CASE("Push updates count", "[ed4b0e01-3bbd-4895-af25-152b5914b3da]") {
    simple_linked_list::List list{};
    list.push(1);
    list.push(2);
    list.push(3);
    REQUIRE(list.size() == 3);
}

TEST_CASE("Push and pop", "[41666790-b932-4e5a-b323-e848a83d12d5]") {
    simple_linked_list::List list{};
    list.push(1);
    list.push(2);
    REQUIRE(list.pop() == 2);
    list.push(3);
    REQUIRE(list.size() == 2);
    REQUIRE(list.pop() == 3);
    REQUIRE(list.pop() == 1);
    REQUIRE(list.size() == 0);
}

TEST_CASE("Peek on empty list is an error",
          "[930a4a5c-76f6-47ec-9be3-4e70993173a1]") {
    simple_linked_list::List list{};
    REQUIRE_THROWS_AS(list.peek(), std::out_of_range);
}

TEST_CASE("Can peek on singleton list",
          "[43255a50-d919-4e81-afce-e4a271eaedbd]") {
    simple_linked_list::List list{};
    list.push(1);
    REQUIRE(list.peek() == 1);
}

TEST_CASE("Can peek on non-empty list",
          "[48353020-e25d-4621-a854-e35fb1e15fa7]") {
    simple_linked_list::List list{};
    list.push(1);
    list.push(2);
    REQUIRE(list.peek() == 2);
}

TEST_CASE("Peek does not change the count",
          "[96fcead9-a713-46c2-8005-3f246c873851]") {
    simple_linked_list::List list{};
    list.push(1);
    list.push(2);
    REQUIRE(list.peek() == 2);
    REQUIRE(list.size() == 2);
}

TEST_CASE("Can peek after a pop and push",
          "[7576ed05-7ff7-4b84-8efb-d34d62c110f5]") {
    simple_linked_list::List list{};
    list.push(1);
    list.push(2);
    REQUIRE(list.peek() == 2);
    REQUIRE(list.pop() == 2);
    REQUIRE(list.peek() == 1);
    list.push(3);
    REQUIRE(list.peek() == 3);
}

TEST_CASE("Reversed non-empty list is reversed",
          "[92851ebe-9f52-4406-b92e-0718c441a2ab]") {
    simple_linked_list::List list{};
    list.push(1);
    list.push(2);
    list.push(3);
    list.reverse();
    REQUIRE(list.pop() == 1);
    REQUIRE(list.pop() == 2);
    REQUIRE(list.pop() == 3);
}

TEST_CASE("Reversed non-empty list is reversed (count after reverse)",
          "[1210eeda-b23f-4790-930c-7ac6d0c8e723]") {
    simple_linked_list::List list{};
    list.push(1);
    list.push(2);
    list.push(3);
    list.reverse();
    REQUIRE(list.size() == 3);
    REQUIRE(list.pop() == 1);
    REQUIRE(list.pop() == 2);
    REQUIRE(list.pop() == 3);
}

TEST_CASE("Double reverse", "[9b53af96-7494-4cfa-9b77-b7366fed5c4c]") {
    simple_linked_list::List list{};
    list.push(1);
    list.push(2);
    list.push(3);
    list.reverse();
    list.reverse();
    REQUIRE(list.pop() == 3);
    REQUIRE(list.pop() == 2);
    REQUIRE(list.pop() == 1);
}
