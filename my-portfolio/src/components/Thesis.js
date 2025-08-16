import { Container } from 'react-bootstrap';

const Thesis = () => {
  return (
    <section id="thesis" className="py-5 bg-white">
      <Container>
        <h2 className="text-center mb-3">Master’s Thesis</h2>
        <p className="lead text-center mx-auto" style={{ maxWidth: "700px" }}>
          My thesis explores optimization algorithms for solving Wordle, using
          simulated annealing and other combinatorial strategies to minimize average guess count across all solutions.
          It combines probability theory, algorithm design, and statistical simulation.
        </p>
        <div className="text-center mt-3">
          <a
            href="/sdsu_thesis_latex.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary"
          >
            Read Thesis
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Thesis;
