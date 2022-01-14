import React from 'react'

export default function Megamenu() {
    return (
        <ul class="navbar-nav w-100 justify-content-between ml-5">
            <li class="nav-item align-self-center dropdown-hoverable">
                <a class="custom-nav nav-link rounded-0 text-left px-3 text-uppercase font-weight-bold"
                    href="#" role="button" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">
                    <i style="font-size: 10px" class="icon-surface1-38 pr-2"></i>Aan De Slag
                </a>
                <div class="d-block d-sm-none d-none d-sm-block d-md-none d-md-block d-lg-none">
                    <div class="dropdown-menu border-0 pt-0 mt-0 w-100">
                        <ul style="line-height: 30px" class="list-unstyled p-4">
                            <li><a class="text-dark" href="#"><i style="width: 30px; display: inline-block;"
                                class="icon-surface1-12 pr-2"></i>Tuin</a></li>
                            <li><a class="text-dark" href="#"><i style="width: 30px; display: inline-block;"
                                class="icon-surface1-11 pr-2"></i>Gereedschap</a></li>
                            <li><a class="text-dark" href="#"><i style="width: 30px; display: inline-block;"
                                class="icon-surface1-11 pr-2"></i>Bouwmaterialen</a></li>
                            <li><a class="text-dark" href="#"><i style="width: 30px; display: inline-block;"
                                class="icon-Varlk-11 pr-2"></i>Hout & schrijnwerk</a></li>
                            <li><a class="text-dark" href="#"><i style="width: 30px; display: inline-block;"
                                class="icon-Varlk-9 pr-2"></i>Verf & houtbescherming</a></li>
                            <li><a class="text-dark" href="#"><i style="width: 30px; display: inline-block;"
                                class="icon-surface1-7 pr-2"></i>Sanitair</a></li>
                            <li><a class="text-dark" href="#"><i style="width: 30px; display: inline-block;"
                                class="icon-surface1-2 pr-2"></i>Verlichting</a></li>
                            <li><a class="text-dark" href="#"><i style="width: 30px; display: inline-block;"
                                class="icon-surface1-6 pr-2"></i>Ijzerwaren</a></li>
                            <li><a class="text-dark" href="#"><i style="width: 30px; display: inline-block;"
                                class="icon-surface1 pr-2"></i>Elektriciteit</a></li>
                            <li><a class="text-dark" href="#"><i style="width: 30px; display: inline-block;"
                                class="icon-surface1-3 pr-2"></i>Verwarming</a></li>
                            <li><a class="text-dark" href="#"><i style="width: 30px; display: inline-block;"
                                class="icon-surface1-5 pr-2"></i>Huishouden</a></li>
                            <li><a class="text-dark" href="#"><i style="width: 30px; display: inline-block;"
                                class="icon-Varlk-18 pr-2"></i>Behang & decoratie</a></li>
                            <li><a class="text-dark" href="#"><i style="width: 30px; display: inline-block;"
                                class="icon-surface1-9 pr-2"></i>Auto & fiets</a></li>
                            <li><a class="text-dark" href="#"><i style="width: 30px; display: inline-block;"
                                class="icon-surface1-8 pr-2"></i>Keuken</a></li>
                            <li><a class="text-dark" href="#"><i style="width: 30px; display: inline-block;"
                                class="icon-surface1-10 pr-2"></i>Dierenverzorging</a></li>
                        </ul>
                    </div>
                </div>
                <div class="d-none d-lg-block d-xl-none d-xl-block">
                    <div class="dropdown-menu mega-dropdown-menu border-0 pt-0 mt-0">
                        <div class="container shadow px-0">
                            <div class="row dropdown-img p-3">
                                <div class="col-md-3 col-5 my-nav-pills">
                                    <ul style="line-height: 14px;"
                                        class="list-unstyled nav flex-column nav-pills" role="tablist">
                                        <li><a class="nav-link active" href="#tuin" role="tab"
                                            data-toggle="tab"><i
                                                style="width: 30px; display: inline-block;"
                                                class="icon-surface1-12 pr-2"></i>Tuin</a></li>
                                        <li><a class="nav-link" href="#gereedschap" role="tab"
                                            data-toggle="tab"><i
                                                style="width: 30px; display: inline-block;"
                                                class="icon-surface1-11 pr-2"></i>Gereedschap</a></li>
                                        <li><a class="nav-link" href="#bouwmaterialen" role="tab"
                                            data-toggle="tab"><i
                                                style="width: 30px; display: inline-block;"
                                                class="icon-surface1-11 pr-2"></i>Bouwmaterialen</a>
                                        </li>
                                        <li><a class="nav-link" href="#hout" role="tab" data-toggle="tab"><i
                                            style="width: 30px; display: inline-block;"
                                            class="icon-Varlk-11 pr-2"></i>Hout & schrijnwerk</a>
                                        </li>
                                        <li><a class="nav-link" href="#verf" role="tab" data-toggle="tab"><i
                                            style="width: 30px; display: inline-block;"
                                            class="icon-Varlk-9 pr-2"></i>Verf & houtbescherming</a>
                                        </li>
                                        <li><a class="nav-link" href="#sanitair" role="tab"
                                            data-toggle="tab"><i
                                                style="width: 30px; display: inline-block;"
                                                class="icon-surface1-7 pr-2"></i>Sanitair</a></li>
                                        <li><a class="nav-link" href="#verlichting" role="tab"
                                            data-toggle="tab"><i
                                                style="width: 30px; display: inline-block;"
                                                class="icon-surface1-2 pr-2"></i>Verlichting</a></li>
                                        <li><a class="nav-link" href="#ijzerwaren" role="tab"
                                            data-toggle="tab"><i
                                                style="width: 30px; display: inline-block;"
                                                class="icon-surface1-6 pr-2"></i>Ijzerwaren</a></li>
                                        <li><a class="nav-link" href="#elektriciteit" role="tab"
                                            data-toggle="tab"><i
                                                style="width: 30px; display: inline-block;"
                                                class="icon-surface1 pr-2"></i>Elektriciteit</a></li>
                                        <li><a class="nav-link" href="#verwarming" role="tab"
                                            data-toggle="tab"><i
                                                style="width: 30px; display: inline-block;"
                                                class="icon-surface1-3 pr-2"></i>Verwarming</a></li>
                                        <li><a class="nav-link" href="#huishouden" role="tab"
                                            data-toggle="tab"><i
                                                style="width: 30px; display: inline-block;"
                                                class="icon-surface1-5 pr-2"></i>Huishouden</a></li>
                                        <li><a class="nav-link" href="#behang" role="tab"
                                            data-toggle="tab"><i
                                                style="width: 30px; display: inline-block;"
                                                class="icon-Varlk-18 pr-2"></i>Behang & decoratie</a>
                                        </li>
                                        <li><a class="nav-link" href="#auto" role="tab" data-toggle="tab"><i
                                            style="width: 30px; display: inline-block;"
                                            class="icon-surface1-9 pr-2"></i>Auto & fiets</a></li>
                                        <li><a class="nav-link" href="#keuken" role="tab"
                                            data-toggle="tab"><i
                                                style="width: 30px; display: inline-block;"
                                                class="icon-surface1-8 pr-2"></i>Keuken</a></li>
                                        <li><a class="nav-link" href="#dierenverzorging" role="tab"
                                            data-toggle="tab"><i
                                                style="width: 30px; display: inline-block;"
                                                class="icon-surface1-10 pr-2"></i>Dierenverzorging</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-md-9 col-7 mega-height">
                                    <div class="tab-content">
                                        <div class="tab-pane active" id="tuin">
                                            <div class="row">
                                                <div class="col-md-5 col-12">
                                                    <ul style="line-height: 28px" class="list-unstyled">
                                                        <li>
                                                            <h4 class="font-weight-bold">Tuinconstructies &
                                                                opberging</h4>
                                                        </li>
                                                        <li><a href="#" class="text-dark">Tuinhuizen</a>
                                                        </li>
                                                        <li><a href="#" class="text-dark">Pergola's</a></li>
                                                        <li><a href="#" class="text-dark">Garages</a></li>
                                                        <li><a href="#" class="text-dark">Paviljoenen</a>
                                                        </li>
                                                        <li><a href="#" class="text-dark">Carports</a></li>
                                                        <li><a href="#" class="text-dark">Serres</a></li>
                                                        <li><a href="#" class="text-dark">Tuinschermen</a>
                                                        </li>
                                                        <li><a href="#" class="text-dark">Tuinopberging</a>
                                                        </li>
                                                        <li><a href="#" class="text-dark">Fietsopberging</a>
                                                        </li>
                                                        <li><a href="#" class="text-dark">Poorten</a></li>
                                                        <li><a href="#" class="text-dark">Tuindraad</a></li>
                                                    </ul>
                                                    <ul style="line-height: 28px"
                                                        class="list-unstyled mt-5">
                                                        <li>
                                                            <h4 class="font-weight-bold">Tuindraad</h4>
                                                        </li>
                                                        <li><a href="#" class="text-dark">Terras &
                                                            bestrating</a></li>
                                                        <li><a href="#" class="text-dark">Grind</a></li>
                                                        <li><a href="#" class="text-dark">Terrasplanken</a>
                                                        </li>
                                                        <li><a href="#" class="text-dark">Pergola's</a></li>
                                                        <li><a href="#" class="text-dark">Tuindraad</a></li>
                                                        <li><a href="#" class="text-dark">Terrastegels &
                                                            klinkers</a></li>
                                                        <li><a href="#" class="text-dark">Grastegels &
                                                            grindtegels</a></li>
                                                    </ul>
                                                    <ul style="line-height: 28px"
                                                        class="list-unstyled mt-5">
                                                        <li>
                                                            <h4 class="font-weight-bold">Tuindraad</h4>
                                                        </li>
                                                        <li><a href="#" class="text-dark">Terras &
                                                            bestrating</a></li>
                                                        <li><a href="#" class="text-dark">Grind</a></li>
                                                        <li><a href="#" class="text-dark">Terrasplanken</a>
                                                        </li>
                                                        <li><a href="#" class="text-dark">Pergola's</a></li>
                                                        <li><a href="#" class="text-dark">Tuindraad</a></li>
                                                        <li><a href="#" class="text-dark">Terrastegels &
                                                            klinkers</a></li>
                                                        <li><a href="#" class="text-dark">Grastegels &
                                                            grindtegels</a></li>
                                                    </ul>
                                                </div>
                                                <div class="col-md-5 col-12">
                                                    <ul style="line-height: 28px" class="list-unstyled">
                                                        <li>
                                                            <h4 class="font-weight-bold">Tuingereedschap &
                                                                machines</h4>
                                                        </li>
                                                        <li><a href="#" class="text-dark">Grasmaaiers</a>
                                                        </li>
                                                        <li><a href="#" class="text-dark">Bosmaaiers</a>
                                                        </li>
                                                        <li><a href="#" class="text-dark">Bladblazers &
                                                            bladzuigers</a></li>
                                                        <li><a href="#" class="text-dark">Kettingzagen</a>
                                                        </li>
                                                        <li><a href="#"
                                                            class="text-dark">Hogedrukreinigers</a></li>
                                                        <li><a href="#"
                                                            class="text-dark">Onkruidbranders</a></li>
                                                        <li><a href="#" class="text-dark">Heggenscharen</a>
                                                        </li>
                                                        <li><a href="#" class="text-dark">Hakselaars</a>
                                                        </li>
                                                        <li><a href="#" class="text-dark">Trimmers</a></li>
                                                        <li><a href="#" class="text-dark">Toon meer</a></li>
                                                        <li><a href="#" class="text-dark">Tuinplezier</a>
                                                        </li>
                                                        <li><a href="#" class="text-dark">Barbecues</a></li>
                                                    </ul>
                                                    <ul style="line-height: 28px"
                                                        class="list-unstyled mt-5">
                                                        <li>
                                                            <h4 class="font-weight-bold">Partytenten &
                                                                zonnetenten</h4>
                                                        </li>
                                                        <li><a href="#" class="text-dark">Zwembaden</a></li>
                                                        <li><a href="#" class="text-dark">Windschermen</a>
                                                        </li>
                                                        <li><a href="#" class="text-dark">Tuindecoratie</a>
                                                        </li>
                                                        <li><a href="#"
                                                            class="text-dark">Buitenspeelgoed</a></li>
                                                        <li><a href="#" class="text-dark">Toon meer</a></li>
                                                        <li><a href="#" class="text-dark">Parasols &
                                                            zonwering</a></li>
                                                        <li><a href="#" class="text-dark">Zonwering</a></li>
                                                        <li><a href="#" class="text-dark">Parasols</a></li>
                                                    </ul>
                                                </div>
                                                <div class="col-md-2 col-12">

                                                </div>
                                            </div>



                                        </div>
                                        <div class="tab-pane" id="gereedschap">
                                            <ul class="list-unstyled">
                                                <li>Gereedschap alt kategorileri</li>
                                            </ul>
                                        </div>
                                        <div class="tab-pane" id="bouwmaterialen">
                                            <ul class="list-unstyled">
                                                <li>Bouwmaterialen alt kategorileri</li>
                                            </ul>
                                        </div>
                                        <div class="tab-pane" id="hout">
                                            <ul class="list-unstyled">
                                                <li>Hout alt kategorileri</li>
                                            </ul>
                                        </div>
                                        <div class="tab-pane" id="verf">
                                            <ul class="list-unstyled">
                                                <li>Verf alt kategorileri</li>
                                            </ul>
                                        </div>
                                        <div class="tab-pane" id="sanitair">
                                            <ul class="list-unstyled">
                                                <li>Sanitair alt kategorileri</li>
                                            </ul>
                                        </div>
                                        <div class="tab-pane" id="verlichting">
                                            <ul class="list-unstyled">
                                                <li>Verlichting alt kategorileri</li>
                                            </ul>
                                        </div>
                                        <div class="tab-pane" id="ijzerwaren">
                                            <ul class="list-unstyled">
                                                <li>Ijzerwaren alt kategorileri</li>
                                            </ul>
                                        </div>
                                        <div class="tab-pane" id="elektriciteit">
                                            <ul class="list-unstyled">
                                                <li>Elektriciteit alt kategorileri</li>
                                            </ul>
                                        </div>
                                        <div class="tab-pane" id="verwarming">
                                            <ul class="list-unstyled">
                                                <li>Verwarming alt kategorileri</li>
                                            </ul>
                                        </div>
                                        <div class="tab-pane" id="huishouden">
                                            <ul class="list-unstyled">
                                                <li>Huishouden alt kategorileri</li>
                                            </ul>
                                        </div>
                                        <div class="tab-pane" id="behang">
                                            <ul class="list-unstyled">
                                                <li>Behang alt kategorileri</li>
                                            </ul>
                                        </div>
                                        <div class="tab-pane" id="auto">
                                            <ul class="list-unstyled">
                                                <li>Auto alt kategorileri</li>
                                            </ul>
                                        </div>
                                        <div class="tab-pane" id="keuken">
                                            <ul class="list-unstyled">
                                                <li>Keuken alt kategorileri</li>
                                            </ul>
                                        </div>
                                        <div class="tab-pane" id="dierenverzorging">
                                            <ul class="list-unstyled">
                                                <li>Dierenverzorging alt kategorileri</li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li class="nav-item align-self-center">
                <a class="text-white text-uppercase" href="#">Deals in</a>
            </li>
            <li
                class="nav-item w-50 d-md-none d-lg-block d-lg-none d-xl-block d-none d-md-block d-lg-none d-none d-lg-block d-xl-none">
                <a class="nav-link" href="#">
                    <div class="input-group input-group-lg">
                        <div class="input-group-prepend">
                            <span style="color:#c8c8c8"
                                class="border-right-0 input-group-text bg-white pl-4" id="basic-addon1"><i
                                    class="icon-surface1-35"></i></span>
                        </div>
                        <input type="text" class="form-control border-left-0 pl-2 text-blue"
                            placeholder="trouvez-le maintenant!" aria-label="email"
                            aria-describedby="button-addon2" />
                        <div class="input-group-append">
                            <button class="btn btn-dark px-4" type="button"
                                id="button-addon2"><small>TROUVER</small></button>
                        </div>
                    </div>
                </a>
            </li>

            <li class="nav-item align-self-center">
                <ul class="list-unstyled">
                    <li class="list-inline-item">
                        <div style="height: 46px" class="btn-group dropdown-hoverable">
                            <button style="line-height: 18px;" type="button"
                                class="btn btn-outline-blue dropdown rounded text-left"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="icon-surface1-30 h3 px-2"></i>
                            </button>
                            <div class="dropdown-menu dropdown-menu-right border-0 shadow">
                                <form class="px-4 py-3">
                                    <div class="form-group">
                                        <label for="exampleDropdownFormEmail1">Adresse email</label>
                                        <input type="email" class="form-control"
                                            id="exampleDropdownFormEmail1" placeholder="email@example.com" />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleDropdownFormMot de passe1">Mot de passe</label>
                                        <input type="password" class="form-control"
                                            id="exampleDropdownFormMot de passe1"
                                            placeholder="Mot de passe" />
                                    </div>
                                    <div class="form-group">
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input"
                                                id="dropdownCheck" />
                                            <label class="form-check-label" for="dropdownCheck">
                                                Se souvenir de moi
                                            </label>
                                        </div>
                                    </div>
                                    <button type="submit" class="btn btn-blue">Se connecter</button>
                                </form>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Êtes-vous nouveau ici? Inscrivez-vous!</a>
                                <a class="dropdown-item" href="#">Mot de passe oublié?</a>
                            </div>

                        </div>
                    </li>
                    <li class="list-inline-item">
                        <div style="height: 46px" class="btn-group dropdown-hoverable">
                            <button type="button"
                                class="btn btn-outline-blue dropdown-toggle text-left pb-0"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="icon-surface1-36 h3"></i><span
                                    style="margin-left: -9px; margin-top: 5px; position: absolute;"
                                    class="badge badge-blue">4</span>
                            </button>
                            <div style="width: 26rem;"
                                class="dropdown-menu dropdown-menu-right border-0 shadow">
                                <ul class="list-unstyled">
                                    <li class="dropdown-header">MON PANIER</li>
                                    <li class="dropdown-divider"></li>
                                    <li style="white-space: normal !important" class="media dropdown-item">
                                        <div style="width: 80px !important; text-align: center;"
                                            class="mr-2">
                                            <img src="img/category-1.png" height="80px"
                                                class="img-responsive" alt="..." />
                                        </div>
                                        <div class="pt-3">
                                            <h4 class="mb-0">Garbarbecue Spring 300 grijs Hoes barbecue Uni
                                                XXL Series 2</h4>
                                            <h3 class="font-weight-bold"><span>€499,</span><span
                                                class="h6">99</span></h3>
                                        </div>
                                    </li>
                                    <li style="white-space: normal !important" class="media dropdown-item">
                                        <div style="width: 80px !important; text-align: center;"
                                            class="mr-2">
                                            <img src="img/category-2.png" height="80px"
                                                class="img-responsive" alt="..." />
                                        </div>
                                        <div class="pt-3">
                                            <h4 class="mb-0">Tuinhuis Manor 65 kunststof 185x152x226 cm</h4>
                                            <h3 class="font-weight-bold"><span>€499,</span><span
                                                class="h6">99</span></h3>
                                        </div>
                                    </li>
                                    <li></li>

                                </ul>
                                <div class="container py-3"><button class="btn btn-dark mr-2">ALLER AU
                                    PANIER</button><button class="btn btn-blue">ACHETER
                                        MAINTENANT</button></div>
                            </div>
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
    )
}
