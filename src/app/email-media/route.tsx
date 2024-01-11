import {
  Body,
  Container,
  Head,
  Html,
  Row,
  Section,
} from "@react-email/components";
import { render } from "@react-email/render";
import { Tailwind } from "@react-email/tailwind";
import { NextRequest, NextResponse } from "next/server";
import { twConfig } from "../tw";

export const runtime = "nodejs";

const renderEmail = async (req: NextRequest): Promise<NextResponse> => {
  const html = render(
    <Html lang="en">
      <Tailwind config={twConfig}>
        <Head />

        <Body className="font-sans">
          <Container>
            <Section>
              <Row>
                <Section className="dark:bg-red-800 bg-green-100 p-4">
                  Hello with media queries
                </Section>
              </Row>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>,
    {
      pretty: true,
    }
  );

  return new NextResponse(html, {
    status: 200,
    headers: { "Content-Type": "text/html" },
  });
};

export async function GET(req: NextRequest): Promise<NextResponse> {
  return renderEmail(req);
}
