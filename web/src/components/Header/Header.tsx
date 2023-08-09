import { FaChevronDown, FaUser, FaShoppingCart } from "react-icons/fa";

import { Container } from "@/components";

const Header = () => {
  return (
    <header>
      <Container>
        <section>
          <button>
            Comprar <FaChevronDown />
          </button>
        </section>

        <h1>Pizza Armly</h1>

        <section>
          <p>A segunda pizza com 20% OFF</p>
          <FaUser />
          <button>
            <FaShoppingCart />
          </button>
        </section>
      </Container>
    </header>
  );
};

export default Header;
