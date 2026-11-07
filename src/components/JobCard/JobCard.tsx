import './JobCard.css'

interface JobCardProps {
    name: string;
    logo: string;
    role: string;
    experience: string;
}

function JobCard({ name, logo, role, experience }: JobCardProps) {
    return (
        <div className='job-card'>
            {/* top half is card image */}
            <div className='job-logo'>
                <img src={logo} alt={`${name} logo`} />
            </div>
            {/* bottom half is details and link */}
            <div className="job-body">
                <h3 className='job-name'>{name}</h3>
                <p className='role'><b>{role}</b></p>
                <p className='job-experience'><b>Experience: {experience} years</b></p>
                <button className='view-job-btn'><b>View Job</b></button>
            </div>
        </div>
    );
}
export default JobCard;