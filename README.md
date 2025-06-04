# 🥗 Plataforma de Refeições Saudáveis

Este projeto foi desenvolvido como parte de uma entrega académica, utilizando React para criar uma plataforma de gestão e encomenda de refeições com foco em saúde e nutrição.

## 👥 Equipa

- Iris Biaguê (119251)
- Guilherme Graça (115876)
- Gonçalo Martins (107313)



## 🚀 Tecnologias Utilizadas

- React
- JavaScript (ES6+)
- HTML/CSS
- LocalStorage para persistência de dados
- React Hooks (useState, useEffect)





## 🛠️ Instruções para correr a aplicação localmente

1. Instalar dependências:

```bash
npm install
```

2. Iniciar a aplicação:

```bash
npm start
```

3. Aceder no browser a:

```
http://localhost:3000
```

## 👤 Como testar a plataforma

### Conta de Cliente:

1. O utilizador, ao aceder à plataforma pela primeira vez, deverá entrar na secção “Criar Conta” e inserir os seus dados, juntamente com as preferências nutricionais.
2. Com base nestas preferências, será apresentada uma página de recomendações personalizada.
3. Se tiver optado por subscrever o plano semanal, verá que o seu carrinho de compras foi automaticamente preenchido com 7 refeições.
4. Pode então selecionar uma refeição por dia, garantindo assim um plano variado para a semana.
5. Na página de recomendações, ao clicar numa refeição, poderá aceder a mais detalhes sobre a mesma, visitar o perfil do restaurante responsável e efetuar o pedido.
6. Ao fazer o pedido, será redirecionado para o carrinho, onde poderá finalizar o pagamento e utilizar os códigos de desconto “vinte” e “MYDESCONTO”.
7. Após a entrega, poderá avaliar o estafeta e dar gorjeta, se assim o desejar.
8. Todas as preferências definidas na criação da conta poderão ser alteradas na secção “Conta Cliente”, e a página de recomendações será automaticamente atualizada conforme essas alterações.
9. Na secção “About Us”, o utilizador poderá saber mais sobre a plataforma e até enviar uma reclamação.

### Conta Profissional:

1. Aceder à secção “Início” e clicar no botão “Profissional”.
2. Escolher entre visitar a conta do estafeta ou do restaurante.
3. Inserir um e-mail e palavra-passe à escolha para aceder (não é necessária validação real).
4. A conta do estafeta apenas apresenta uma interface visual representativa.
5. A conta do restaurante permite:
   - Marcar pedidos como prontos;
   - Alterar os dados das três refeições do restaurante “Bom Sabor” (preço, calorias, dietas compatíveis);
   - Guardar alterações.
6. Para ver as alterações, voltar à conta de cliente com preferências compatíveis — os pratos atualizados aparecerão na página de recomendações.



Este projeto representa um esforço de aprendizagem sobre desenvolvimento web com React e simulação de funcionalidades reais de plataformas de entrega.
