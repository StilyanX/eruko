TEST_CASE("only_one_check_digit_is_allowed") {
    REQUIRE_FALSE(isbn_verifier::is_valid("3-598-21508-96"));
}

TEST_CASE("x_is_not_substituted_by_the_value_10") {
    REQUIRE_FALSE(isbn_verifier::is_valid("3-598-2X507-5"));
}
