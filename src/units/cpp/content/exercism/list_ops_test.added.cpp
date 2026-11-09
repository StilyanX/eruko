TEST_CASE("reverse: non-empty odd-length list",
          "[64d77184-5f74-4845-b158-545d2dd2df98]") {
    std::vector<int> input{1, 3, 5, 7, 9, 11, 13};
    auto result{list_ops::reverse(input)};
    std::vector<int> expected{13, 11, 9, 7, 5, 3, 1};
    REQUIRE(result == expected);
}
