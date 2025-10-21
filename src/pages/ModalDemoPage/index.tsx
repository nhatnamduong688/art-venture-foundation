import React, { useState } from "react";
import { ContentModal } from "../../components/business";
import { Button, Typography } from "../../design-system/atoms";
import { Footer } from "../../design-system/organisms";
import type { ModalSize } from "../../components/business";
import "./ModalDemoPage.css";

const ModalDemoPage: React.FC = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (modalId: string) => setActiveModal(modalId);
  const closeModal = () => setActiveModal(null);

  // Sample image URL
  const sampleImage =
    "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";

  return (
    <>
      <div className="modal-demo">
        <div className="modal-demo__container">
          <Typography variant="display-lg" as="h1" className="modal-demo__title">
            Content Modal Demo
          </Typography>

          <Typography variant="body-lg" className="modal-demo__subtitle">
            Test all modal variants and sizes
          </Typography>

          {/* Size Variants */}
          <div className="modal-demo__section">
            <Typography variant="h3" as="h2" className="modal-demo__section-title">
              Size Variants
            </Typography>

            <div className="modal-demo__grid">
              <div className="modal-demo__card">
                <Typography variant="h4" as="h3">
                  Small Modal
                </Typography>
                <Typography variant="body-sm" color="secondary">
                  Compact modal for quick previews (Desktop - 5, 6)
                </Typography>
                <Button variant="primary" size="md" onClick={() => openModal("small")}>
                  Open Small Modal
                </Button>
              </div>

              <div className="modal-demo__card">
                <Typography variant="h4" as="h3">
                  Medium Modal
                </Typography>
                <Typography variant="body-sm" color="secondary">
                  Standard modal for content preview (Desktop - 3)
                </Typography>
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => openModal("medium")}
                >
                  Open Medium Modal
                </Button>
              </div>

              <div className="modal-demo__card">
                <Typography variant="h4" as="h3">
                  Large Modal (Expanded)
                </Typography>
                <Typography variant="body-sm" color="secondary">
                  Expanded modal with more content (Desktop - 4)
                </Typography>
                <Button variant="primary" size="md" onClick={() => openModal("large")}>
                  Open Large Modal
                </Button>
              </div>
            </div>
          </div>

          {/* Type Variants */}
          <div className="modal-demo__section">
            <Typography variant="h3" as="h2" className="modal-demo__section-title">
              Content Types
            </Typography>

            <div className="modal-demo__grid">
              <div className="modal-demo__card">
                <Typography variant="h4" as="h3">
                  News Modal
                </Typography>
                <Typography variant="body-sm" color="secondary">
                  Quick preview for news articles
                </Typography>
                <Button variant="outline" size="md" onClick={() => openModal("news")}>
                  Open News Modal
                </Button>
              </div>

              <div className="modal-demo__card">
                <Typography variant="h4" as="h3">
                  Event Modal
                </Typography>
                <Typography variant="body-sm" color="secondary">
                  Preview for upcoming events
                </Typography>
                <Button variant="outline" size="md" onClick={() => openModal("event")}>
                  Open Event Modal
                </Button>
              </div>

              <div className="modal-demo__card">
                <Typography variant="h4" as="h3">
                  Artwork Modal
                </Typography>
                <Typography variant="body-sm" color="secondary">
                  Preview for artworks
                </Typography>
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => openModal("artwork")}
                >
                  Open Artwork Modal
                </Button>
              </div>
            </div>
          </div>

          {/* Dark Variant - NEW! */}
          <div className="modal-demo__section">
            <Typography variant="h3" as="h2" className="modal-demo__section-title">
              🌙 Dark Variant (Figma Design)
            </Typography>

            <div className="modal-demo__grid">
              <div className="modal-demo__card" style={{ borderColor: '#6B2128' }}>
                <Typography variant="h4" as="h3">
                  Dark Modal with Author Card
                </Typography>
                <Typography variant="body-sm" color="secondary">
                  Pixel-perfect Figma design (Desktop - 3)
                </Typography>
                <Button variant="primary" size="md" onClick={() => openModal("dark-author")}>
                  Open Dark Modal
                </Button>
              </div>

              <div className="modal-demo__card" style={{ borderColor: '#6B2128' }}>
                <Typography variant="h4" as="h3">
                  Dark Modal - Simple
                </Typography>
                <Typography variant="body-sm" color="secondary">
                  Dark variant without author card
                </Typography>
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => openModal("dark-simple")}
                >
                  Open Dark Simple
                </Button>
              </div>
            </div>
          </div>

          {/* Special Cases */}
          <div className="modal-demo__section">
            <Typography variant="h3" as="h2" className="modal-demo__section-title">
              Special Cases
            </Typography>

            <div className="modal-demo__grid">
              <div className="modal-demo__card">
                <Typography variant="h4" as="h3">
                  No Image
                </Typography>
                <Typography variant="body-sm" color="secondary">
                  Modal without image (text only)
                </Typography>
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => openModal("no-image")}
                >
                  Open Text Modal
                </Button>
              </div>

              <div className="modal-demo__card">
                <Typography variant="h4" as="h3">
                  With Expanded Content
                </Typography>
                <Typography variant="body-sm" color="secondary">
                  Modal with additional paragraphs
                </Typography>
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => openModal("expanded")}
                >
                  Open Expanded Modal
                </Button>
              </div>

              <div className="modal-demo__card">
                <Typography variant="h4" as="h3">
                  Custom CTA
                </Typography>
                <Typography variant="body-sm" color="secondary">
                  Modal with custom button text
                </Typography>
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => openModal("custom-cta")}
                >
                  Open Custom CTA
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== MODALS ===== */}

      {/* Small Modal */}
      <ContentModal
        isOpen={activeModal === "small"}
        onClose={closeModal}
        size="small"
        imageUrl={sampleImage}
        title="The Body"
        description="Lorem ipsum dolor sit amet consectetur. Semper odio sit eu adipiscing malesuada sit viverra. Senectus felis id vel enim. Id fames nisi augue arcu ligula et sapien tempor. Et viverra et natoque vitae rhoncus nunc pellentesque in suspendisse."
        ctaText="VIEW DETAIL"
      />

      {/* Medium Modal */}
      <ContentModal
        isOpen={activeModal === "medium"}
        onClose={closeModal}
        size="medium"
        imageUrl={sampleImage}
        title="Lorem ipsum dolor sit amet consectetur."
        description="Lorem ipsum dolor sit amet consectetur. Massa turpis ullamcorper eget elementum feugiat sit quam dolor. Mauris in convallis interdum facilisis platea sapien."
        ctaText="VIEW DETAIL"
      />

      {/* Large Modal (Expanded) */}
      <ContentModal
        isOpen={activeModal === "large"}
        onClose={closeModal}
        size="large"
        imageUrl={sampleImage}
        title="Semper odio sit eu adipiscing malesuada sit viverra"
        description="Lorem ipsum dolor sit amet consectetur. Semper odio sit eu adipiscing malesuada sit viverra. Senectus felis id vel enim. Id fames nisi augue arcu ligula et sapien tempor."
        expandedContent="Et viverra et natoque vitae rhoncus nunc pellentesque in suspendisse. Sapien tortor dui scelerisque quam. Mi vel odio semper consequat viverra magna. Cras purus dictum ipsum bibendum neque."
        ctaText="VIEW DETAIL"
      />

      {/* News Modal */}
      <ContentModal
        isOpen={activeModal === "news"}
        onClose={closeModal}
        size="medium"
        type="news"
        imageUrl={sampleImage}
        title="Gallery exhibition of A&V Foundation 2025"
        description="Lorem ipsum dolor sit amet consectetur. Sagittis suspendisse placerat fermentum quam suspendisse. Maecenas non nibh in at. Aliquam vitae aliquam et tellus mattis tincidunt nam ut pharetra. Amet pellentesque morbi ornare tortor interdum. Urna lorem pharetra eget gravida."
        ctaText="DETAIL"
      />

      {/* Event Modal */}
      <ContentModal
        isOpen={activeModal === "event"}
        onClose={closeModal}
        size="medium"
        type="event"
        imageUrl={sampleImage}
        title="Gallery exhibition of A&V Foundation Mid 2025"
        description="Lorem ipsum dolor sit amet consectetur. Massa auctor justo lorem dictumst. Pharetra tincidunt dictumst sollicitudin ac. Cras purus non sed mus lorem dictumst. Tempor ac accumsan dui orci sit nibh tempor vulputate lorem. Tellus morbi amet felis lorem nisl at a lacus. Proin sed arcu enim dignissim."
        ctaText="DETAIL"
      />

      {/* Artwork Modal */}
      <ContentModal
        isOpen={activeModal === "artwork"}
        onClose={closeModal}
        size="large"
        type="artwork"
        imageUrl={sampleImage}
        title="The Portrait"
        description="Lorem ipsum dolor sit amet consectetur. Praesent nec euismod tellus vivamus vel quam interdum ac nisl. Ultrices sit cras mi in lectus lectus."
        ctaText="VIEW ARTWORK"
      />

      {/* No Image Modal */}
      <ContentModal
        isOpen={activeModal === "no-image"}
        onClose={closeModal}
        size="medium"
        title="About This Exhibition"
        description="Lorem ipsum dolor sit amet consectetur. Massa turpis ullamcorper eget elementum feugiat sit quam dolor. Mauris in convallis interdum facilisis platea sapien. Scelerisque porttitor iaculis in mauris elementum eu vulputate. Viverra neque sit ridiculus orci amet quisque sodales sapien sollicitudin."
        ctaText="LEARN MORE"
      />

      {/* Expanded Content Modal */}
      <ContentModal
        isOpen={activeModal === "expanded"}
        onClose={closeModal}
        size="large"
        imageUrl={sampleImage}
        title="Detailed Article"
        description="Lorem ipsum dolor sit amet consectetur. Pellentesque viverra adipiscing vel dignissim elementum sed. Cum nec morbi posuere in hendrerit semper a ac massa. Blandit enim eu mauris lacus accumsan."
        expandedContent="Sit integer magna purus tincidunt in ipsum. Egestas nam nec suscipit dignissim tincidunt ac. Consequat volutpat odio tortor a nulla volutpat vehicula quis pharetra. Orci cursus consectetur vitae sit pulvinar tellus. Amet tortor."
        ctaText="READ MORE"
      />

      {/* Custom CTA Modal */}
      <ContentModal
        isOpen={activeModal === "custom-cta"}
        onClose={closeModal}
        size="medium"
        imageUrl={sampleImage}
        title="Special Offer"
        description="Lorem ipsum dolor sit amet consectetur. Massa turpis ullamcorper eget elementum feugiat sit quam dolor. Mauris in convallis interdum facilisis platea sapien."
        ctaText="CLAIM OFFER"
        onCtaClick={() => {
          alert("CTA Clicked!");
          closeModal();
        }}
      />

      {/* Dark Variant Modals - NEW! */}
      <ContentModal
        isOpen={activeModal === "dark-author"}
        onClose={closeModal}
        variant="dark"
        size="medium"
        imageUrl={sampleImage}
        title="Lorem ipsum dolor sit amet consectetur."
        description="Lorem ipsum dolor sit amet consectetur. Massa turpis ullamcorper eget elementum feugiat sit quam dolor. Mauris in convallis interdum facilisis platea sapien."
        showAuthorCard={true}
        authorData={{
          avatar: "https://i.pravatar.cc/150?img=12",
          name: "NGUYEN NAM ARTIST",
          email: "namartist@gmail.com",
          phone: "0908xxxxxxx",
          socialLinks: {
            facebook: "#",
            instagram: "#",
          },
        }}
      />

      {/* Dark Simple Modal */}
      <ContentModal
        isOpen={activeModal === "dark-simple"}
        onClose={closeModal}
        variant="dark"
        size="medium"
        imageUrl={sampleImage}
        title="Dark Variant Modal"
        description="Lorem ipsum dolor sit amet consectetur. Massa turpis ullamcorper eget elementum feugiat sit quam dolor. Mauris in convallis interdum facilisis platea sapien."
      />

      <Footer />
    </>
  );
};

export default ModalDemoPage;

