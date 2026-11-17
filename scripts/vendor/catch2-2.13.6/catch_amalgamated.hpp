// Eruko's stand-in for Catch2 v3's single header, for the track test files that include it
// (complex-numbers): Catch2 v2 with v3's name for the matcher base class.
#pragma once
#include "catch.hpp"
namespace Catch::Matchers {
using Impl::MatcherBase;
}
