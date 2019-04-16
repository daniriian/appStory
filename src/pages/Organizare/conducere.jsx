import React, { Component } from 'react';
import Title from '../../components/Header/HeaderTitlePage';
import { conducere } from '../../utils/constants';
import ListaPersonal from '../../components/Employees/EmployeesDepartments';


class Conducere extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {

        return (
            <React.Fragment>
                <Title title="Conducerea instanţei" page="Conducere" subpage="Despre Instanță / Organizare" breadcrumbs={true}/>

                {/* Management team*/}
                <div className="container">
                    <ListaPersonal list={conducere} expended={true} />
                </div>
            </React.Fragment>
        );
    }
}

export default Conducere;