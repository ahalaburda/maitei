import React from 'react';


function Chapter1A() {
	return (
        <div className="" style={{color:'black'}}>
            <h3><strong><em>Maitei/Hola</em></strong></h3>
            <br />
            <p>En esta unidad aprenderemos sobre los pronombres personales como sujeto: <strong>Che</strong> y <strong>Nde</strong>. Asimismo, veremos  cómo saludar en guaraní.</p>
            <p><span>Los pronombres personales reemplazan a las personas que llevan a cabo una acción y a quienes no se mencionan en la oración.</span></p>
            <p><span>En guaraní, los pronombres personales <strong>“Che” (Yo)</strong> corresponde a la primera persona del singular y <strong>“Nde” (Tú)</strong> a la segunda persona del singular.</span></p>
            <p><br /></p>
            <p><span>Seguidamente se presentan las tres conjugaciones verbales según estas sean areales, aireales o chendales según número y sujeto. </span></p>
            
            <table className="table table-responsive table-striped table-bordered">
                <thead className="thead-dark">
                <tr>
                        <th colSpan="2" rowSpan="2"><p>Número</p></th>
                        <th className="text-center">
                            <p>Sujeto</p>
                        </th>
                        <th colSpan="2" className="text-center">
                            <p>Areal</p>
                        </th>
                        <th colSpan="2" className="text-center">
                            <p>Aireal</p>
                        </th>
                        <th colSpan="2" className="text-center">
                            <p>Chendal</p>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="text-center">
                            <p>Oral</p>
                            <p>(comer)</p>
                        </td>
                        <td className="text-center">
                            <p>Nasal</p>
                            <p>(correr)</p>
                        </td>
                        <td className="text-center">
                            <p>Oral</p>
                            <p>(querer)</p>
                        </td>
                        <td className="text-center">
                            <p>Nasal</p>
                            <p>(estar)</p>
                        </td>
                        <td className="text-center">
                            <p>Oral</p>
                            <p>(ser listo)</p>
                        </td>
                        <td className="text-center">
                            <p>Nasal</p>
                            <p>(estar limpio)</p>
                        </td>
                    </tr>
                    <tr>
                        <td><p><strong>1</strong></p></td>
                        <td><p>Singular</p></td>
                        <td><p><strong><i>Che</i></strong></p></td>
                        <td><p>akaru&nbsp;</p></td>
                        <td><p>a&ntilde;ani</p></td>
                        <td><p><strong>ai</strong>pota</p></td>
                        <td><p><strong>ai</strong>me</p></td>
                        <td><p>chera&rsquo;eve</p></td>
                        <td><p>chepotĩ&nbsp;</p></td>
                    </tr>
                    <tr>
                        <td><p><strong>2</strong></p></td>
                        <td><p>Singular</p></td>
                        <td><p><strong><i>Nde</i></strong></p></td>
                        <td><p><strong>re</strong>karu </p></td>
                        <td><p>re&ntilde;ani</p></td>
                        <td><p><strong>rei</strong>pota</p></td>
                        <td><p><strong>rei</strong>me</p></td>
                        <td><p><strong>ndera</strong>&rsquo;eve</p></td>
                        <td><p><strong>ne</strong>potĩ</p></td>
                    </tr>
                </tbody>
            </table>
            <p><span>Se presentan algunos saludos en guaraní :</span></p>
            <div>
                <strong><i><p>Maitei</p></i></strong>
                <strong><i><p>Mba&rsquo;&eacute;ichapa,&nbsp;</p></i></strong>
                <strong><i><p>Mba&rsquo;eteko,&nbsp;</p></i></strong>
                <strong><i><p>Mba&rsquo;&eacute;ichapa neko&rsquo; ẽ</p></i></strong>
                <strong><i><p>Mba&rsquo;&eacute;ichapa ndeka&rsquo;aru&nbsp;&nbsp;</p></i></strong>
                <strong><i><p>Mba&rsquo;&eacute;ichapa ndepyhare Ipor&atilde;,&nbsp;</p></i></strong>
                <strong><i><p>Ipor&atilde;,&nbsp;</p></i></strong>
                <strong><i><p>Ipor&atilde;nte,&nbsp;</p></i></strong>
                <strong><i><p>Ipor&atilde;m&iacute;nte</p></i></strong>
                <strong><i><p>Ipor&atilde;iterei</p></i></strong>
            </div>
        </div>
	);
}

export default Chapter1A;
