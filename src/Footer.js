import React from 'react'
function Footer() {
  return (
      <>
        <section class="py-4 footersection bg-warning ">
            <footer class="d-flex flex-column">
                <div class="container
                d-flex order-1 order-lg-0 order-md-0
                flex-column flex-lg-row flex-md-column flex-sm-column">
                <div class="footer-left col-lg-6 col-md-12 col-sm-12">
                    <h5 class="fw-bold text-blue">Contact Information</h5>
                    <p class="  m-1">
                        <span class="fw-bold">Address </span>:
                        <a
                            href="https://goo.gl/maps/czTcNdUupBvWDxjP7"
                            target="_blank"
                            >
                        #135 block, Barnard St. Brooklyn , NY 10036, USA</a
                            >
                    </p>
                    <p class="  m-1">
                        <span class="fw-bold">Phone </span>
                        :<a href="tel:+404112289" target="_blank" 
                            >+404-11-22-89</a
                            >
                    </p>
                    <p class="  m-1">
                        <span class="fw-bold">Email </span>:
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=example@gmail.com"
                            target="_blank"
                            >
                        example@gmail.com
                        </a>
                    </p>
                </div>
                <hr />
                <div
                    class="
                    footer-right
                    d-flex
                    flex-wrap
                    col-lg-6 col-md-12 col-sm-12
                    mt-md-2 mt-sm-2 mt-lg-0
                    "
                    >
                    <div class="col-lg-4 col-md-4 col-sm-6 col-6">
                        <h5 class="fw-bold ">Company</h5>
                        <ul class="list-unstyled">
                            <li><a href="#about">About</a></li>
                            <li><a href="#">Blog Posts</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#" data-bs-toggle="modal" data-bs-target="#faqModal">FAQs</a></li>
                            <li><a href="#" data-bs-toggle="modal" data-bs-target="#pricingModal">Pricing</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-6 col-6">
                        <h5 class="fw-bold ">Support</h5>
                        <ul class="list-unstyled">
                            <li><a href="#contact">Contact us</a></li>
                            <li><a href="#">Create account</a></li>
                            <li><a href="#">Learning center</a></li>
                            <li><a href="#" data-bs-toggle="modal" data-bs-target="#teamModal">Team</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-6 col-6">
                        <h5 class="fw-bold ">Product</h5>
                        <ul class="list-unstyled">
                            <li><a href="#">Market</a></li>
                            <li><a href="#">VIP</a></li>
                            <li><a href="#">Resources</a></li>
                            <li><a href="#">Sale</a></li>
                            <li><a href="#">Admin UI</a></li>
                        </ul>
                    </div>
                </div>
                </div>
            </footer>
        </section>

      </>
  )
}

export default Footer