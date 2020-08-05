import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

export default class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [
        {
          id: "0cd4eabd-584e-46e8-9fd3-e6bba5d5767d",
          name: "Juice - Tomato, 10 Oz",
          description:
            "aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non",
          imageUrl: "http://dummyimage.com/300x200.jpg/dddddd/000000",
        },
        {
          id: "be2ab4e8-9752-4545-990f-d5731dc6e7b9",
          name: "Cup - 3.5oz, Foam",
          description:
            "sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id",
          imageUrl: "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff",
        },
        {
          id: "a793ccf8-7053-49ed-8e57-9cfb8ed09a1f",
          name: "Nantucket Apple Juice",
          description: "in lectus pellentesque at nulla suspendisse potenti cras in purus eu",
          imageUrl: "http://dummyimage.com/300x200.jpg/dddddd/000000",
        },
        {
          id: "3d593afb-9cf0-44c4-b168-df5c993b6aa2",
          name: "Tuna - Loin",
          description:
            "amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper",
          imageUrl: "http://dummyimage.com/300x200.jpg/cc0000/ffffff",
        },
        {
          id: "08c2f93b-a893-48d0-8c14-85ed66d6d0b1",
          name: "Wine - Penfolds Koonuga Hill",
          description: "erat curabitur gravida nisi at nibh in hac habitasse platea dictumst",
          imageUrl: "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff",
        },
        {
          id: "9bebf6b5-5fb2-435b-8bb9-80be0426c279",
          name: "Lamb - Leg, Bone In",
          description:
            "dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem",
          imageUrl: "http://dummyimage.com/300x200.jpg/dddddd/000000",
        },
        {
          id: "71a8ee7b-85ce-4a82-acb5-acd3a2f08f61",
          name: "Wine - Barbera Alba Doc 2001",
          description:
            "ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris",
          imageUrl: "http://dummyimage.com/300x200.jpg/ff4444/ffffff",
        },
        {
          id: "6705c716-e83c-49f8-ae2b-9038cbb9910b",
          name: "Vol Au Vents",
          description: "at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a",
          imageUrl: "http://dummyimage.com/300x200.jpg/dddddd/000000",
        },
        {
          id: "222065d5-95fc-475d-8ec4-8ce54b3881f6",
          name: "Pie Filling - Cherry",
          description:
            "vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus",
          imageUrl: "http://dummyimage.com/300x200.jpg/cc0000/ffffff",
        },
        {
          id: "fd3dca21-a4e7-4b7e-b397-5d70797f8677",
          name: "Bread - Calabrese Baguette",
          description:
            "sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim",
          imageUrl: "http://dummyimage.com/300x200.jpg/ff4444/ffffff",
        },
        {
          id: "c401b63a-3d1f-4b02-b56e-24d665993c5f",
          name: "Crush - Orange, 355ml",
          description:
            "eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat",
          imageUrl: "http://dummyimage.com/300x200.jpg/ff4444/ffffff",
        },
        {
          id: "a1501230-d94b-4e64-a1b3-f1f29491fe2c",
          name: "Bread - Rye",
          description:
            "pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis",
          imageUrl: "http://dummyimage.com/300x200.jpg/cc0000/ffffff",
        },
        {
          id: "c5b81c77-8b47-4d04-beae-78e65aa40402",
          name: "Lime Cordial - Roses",
          description: "nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper",
          imageUrl: "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff",
        },
        {
          id: "4532e992-2645-4f4f-ab48-b3da2050da72",
          name: "Longos - Chicken Cordon Bleu",
          description:
            "elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis",
          imageUrl: "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff",
        },
        {
          id: "988681b6-2778-4fea-a344-04ad77b70ac0",
          name: "Glucose",
          description:
            "interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu",
          imageUrl: "http://dummyimage.com/300x200.jpg/cc0000/ffffff",
        },
        {
          id: "e5ef072e-72c6-4796-9fbf-bb056a976207",
          name: "Ocean Spray - Ruby Red",
          description:
            "eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue",
          imageUrl: "http://dummyimage.com/300x200.jpg/cc0000/ffffff",
        },
        {
          id: "50f7c0c5-efa2-40e8-ae67-ff3b7e592b2d",
          name: "Extract - Rum",
          description:
            "sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus",
          imageUrl: "http://dummyimage.com/300x200.jpg/dddddd/000000",
        },
        {
          id: "fc723649-d9c1-46a6-a1ad-8219d86e560d",
          name: "Duck - Breast",
          description:
            "ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui",
          imageUrl: "http://dummyimage.com/300x200.jpg/ff4444/ffffff",
        },
        {
          id: "67d121c9-41cf-454b-b7a4-ea3175c86b57",
          name: "Juice - Orangina",
          description:
            "odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in",
          imageUrl: "http://dummyimage.com/300x200.jpg/dddddd/000000",
        },
        {
          id: "382b1c3d-e2f9-4b25-9e6e-4e09a6298d3e",
          name: "Tomatillo",
          description:
            "libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo",
          imageUrl: "http://dummyimage.com/300x200.jpg/cc0000/ffffff",
        },
      ],
    };
  }
  render() {
    const { products } = this.state;
    return (
      <Container>
        <h2>Products</h2>
        <Row>
          {products.map((product) => {
            return (
              <Col sm="4">
                <Card>
                  <CardImg top width="100%" src={product.imageUrl} alt="Card image cap" />
                  <CardBody>
                    <CardTitle>{product.name}</CardTitle>
                    <CardText>{product.description}</CardText>
                    <Button>Add to cart</Button>
                  </CardBody>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}
