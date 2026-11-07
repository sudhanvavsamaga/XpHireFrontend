import './LandingPage.css'
import jobs from '../../TestData/Jobs.json'
import JobCard from '../JobCard/JobCard.tsx'

function LandingPage() {
    return (
        <main className="landing-page">
            <h1 className="landing">Check out the Latest Jobs</h1>
            <div className="jobs-container">
                {jobs.map((job) => (
                    <JobCard
                        key={job.companyId}
                        name={job.name}
                        logo={job.Logo}
                        role={job.Role}
                        experience={job.Experience.join('-')}
                    />
                ))}
            </div>
        </main>
    );
}
export default LandingPage;