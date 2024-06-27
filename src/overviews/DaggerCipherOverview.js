import { Typography, Image, Flex } from "antd";

const { Title, Text, Link } = Typography;

const Header = () => {
  return <Title>Dagger Cipher</Title>;
};

const Description = () => {
  return (
    <div>
      <Text>
        The Dagger Cipher is a polyalphabetic substitution cipher, meaning it uses
        multiple Caesar Ciphers with varying shifts throughout the encryption
        process. It offers more security compared to the simple Caesar Cipher
        due to the increased key complexity.
      </Text>
    </div>
  );
};

const Example = () => {
  return (
    <Flex vertical={true}>
      <Text>Write down the plaintext message: HELLO WORLD.</Text>
      <Text>Choose a keyword (key): SECRET.</Text>
      <Text>
        Create a keystream by repeating the keyword until it matches the
        plaintext message length. In this case, the keystream becomes:
        SECRETSECRE
      </Text>
      <Text>
        For each letter in the plaintext message, find its corresponding letter
        in the keystream. Use this letter's position in the alphabet (0-based
        indexing) as the shift value for a Caesar Cipher.
      </Text>
      <Text>Encrypt the plaintext letter using the Caesar Cipher with the
        derived shift value.
      </Text>
      <Text>Example:</Text>
      <Text>- Plaintext: H (position 7)</Text>
      <Text>- Keystream: S (position 18)</Text>
      <Text>
        - Shift value: 18 (keystream letter position) % 26 (number of alphabets)
        = 18
      </Text>
      <Text>- Encrypted: X (H shifted by 18 positions)</Text>
      <Flex wrap="wrap" justify="center" gap={10} style={{ margin: 20 }}>
        <Image src="https://i.pinimg.com/736x/94/ba/9d/94ba9d2ec86d4047ff20bda7d11e32dd.jpg" />
        <Image src="https://i.pinimg.com/736x/94/ba/9d/94ba9d2ec86d4047ff20bda7d11e32dd.jpg" width={300} />
      </Flex>
      <Text>
        Following this process for the entire message, the encrypted message
        becomes: XEQTYPHSEWR
      </Text>
    </Flex>
  );
};

const References = () => {
  return (
    <Flex vertical={true}>
      <Link
        href="https://en.wikipedia.org/wiki/Dagger"
        target="_blank"
      >
        Wikipedia - Dagger Cipher
      </Link>
      <Link href="https://www.cryptologie.net/en/chiffrement/daggers-cipher.html" target="_blank">
        cryptologie.net - Dagger Cipher
      </Link>
    </Flex>
  );
};

export { Header, Description, Example, References };
