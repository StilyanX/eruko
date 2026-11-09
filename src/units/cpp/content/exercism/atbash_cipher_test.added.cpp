TEST_CASE("encode_empty_string") { REQUIRE("" == atbash_cipher::encode("")); }

TEST_CASE("decode_empty_string") { REQUIRE("" == atbash_cipher::decode("")); }
