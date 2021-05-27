export class user{
    id:number;
    username:string;
    code:string;
    roles:string;
    email:string;
    password:string;
    constructor(username='',code='',password='',roles='',email='')
    {
        this.username=username;
        this.code=code;
        this.roles=roles;
        this.password=password;
        this.email=email;
    }
}

export class  regg{
    SITUATION_REGLEMENT :string;
    MOIS_REGLEMENT :string;
    ANNEE_REGLEMENT : string;
    SALAIRE:string;
    MONTANT_VERSE :string;
    constructor(SITUATION_REGLEMENT='',MOIS_REGLEMENT='',ANNEE_REGLEMENT='',SALAIRE='',MONTANT_VERSE='')
    {
        this.SITUATION_REGLEMENT=SITUATION_REGLEMENT;
        this.MOIS_REGLEMENT=MOIS_REGLEMENT;
        this.ANNEE_REGLEMENT=ANNEE_REGLEMENT;
        this.SALAIRE=SALAIRE;
        this.MONTANT_VERSE=MONTANT_VERSE;
    }
}
export class Dataset
{
    CIN: string;
    NOM_PRENOM: string;
    GENRE: string;
    TYPE_CONTRAT: string;
    DATE_DEBUT:string;
    DATE_FIN_PREVESIONNELLE:string;
    DATE_FIN_REELLE:string;
    SITUATION: string;
    DATE_SITUATION:string;
    MATRICULE: string;
    NUMERO_AFFILIATION: string;
    REFERENCE_ACCORD: string;
    DATE_ACCORD:string;
    RAISON_SOCIALE_ENTREPRISE: string;
    NOM_ETABLISSEMENT: string;
    EMP_EXIST: number;
    ASS_EXIST: number;
    BUR_COD: number;
    DATE:string;
    TYPE_AVANTAGE: string;
    LISTE_REGLEMENTS : regg[];

    constructor( CIN='',NOM_PRENOM='',GENRE='',TYPE_CONTRAT='',
        DATE_DEBUT='',
        DATE_FIN_PREVESIONNELLE='',
        DATE_FIN_REELLE='',
        SITUATION='',
        DATE_SITUATION='',
        MATRICULE='',
        NUMERO_AFFILIATION='',
        REFERENCE_ACCORD='',
        DATE_ACCORD='',
        RAISON_SOCIALE_ENTREPRISE='',
        NOM_ETABLISSEMENT='',
        
        LISTE_REGLEMENTS=[])
        {this.CIN=CIN;
            this.NOM_PRENOM=NOM_PRENOM;
            this.GENRE=GENRE;
            this.TYPE_CONTRAT=TYPE_CONTRAT;
            this.DATE_DEBUT=DATE_DEBUT;
            this.DATE_FIN_PREVESIONNELLE=DATE_FIN_PREVESIONNELLE;
            this.DATE_FIN_REELLE=DATE_FIN_REELLE;
            this.SITUATION=SITUATION;
            this.DATE_SITUATION=DATE_SITUATION;
            this.MATRICULE=MATRICULE;
            this.NUMERO_AFFILIATION=NUMERO_AFFILIATION;
            this.REFERENCE_ACCORD=REFERENCE_ACCORD;
            this.DATE_ACCORD=DATE_ACCORD;
            this.RAISON_SOCIALE_ENTREPRISE=RAISON_SOCIALE_ENTREPRISE;
            this.NOM_ETABLISSEMENT=NOM_ETABLISSEMENT;
            this.LISTE_REGLEMENTS=LISTE_REGLEMENTS;
        }

}

export class karama
{
    result : string;
    numberLines : string;
    numberColumns: string; 
    dataset2: Dataset[];
   

    constructor( result='', numberColumns='', numberLines='', dataset2=[])
{   
    this.result=result;
    this.numberLines=numberLines
    this.numberColumns=numberColumns;
    this.dataset2=dataset2;   
}
}
export class brcod
{
   bur_cod : number  ;  
   bur_intit: string;
   constructor(bur_cod: number,bur_intit: string)
   {
       this.bur_cod=bur_cod;
       this.bur_intit=bur_intit;
   }

}

export class aneti_avg
{
    code : string;
    lib :string;
    avn_codav:string;
    constructor(code:string,lib:string,avn_codav:string)
    {
        this.code=code;
        this.lib=lib
        this.avn_codav=avn_codav;
    }
}
export class ws_aneti_historique
{
    id:number;
    agent: number;
    type_contrat:string;
    import_local:string;
    date_import:string;
    number:number;
    creation_dossier:number;
    boo_creation_dossier:number;
    constructor(agent:number,type_contrat:string,import_local:string,date_import:string,creation_dosser:number,boo_creation_dosser:number)
    {
        this.agent=agent;
        this.type_contrat=type_contrat;
        this.import_local=import_local;
        this.date_import=date_import;
        this.creation_dossier=creation_dosser;
        this.boo_creation_dossier=boo_creation_dosser;
    }
}

export class facturation
 {
    kar_numemp: number;
    kar_matfisc: string;
    Kar_raissos:string;
    Kar_adr:string;
    kar_matass:number;
    Kar_cin:string;
    kar_nomsal:string;
    kar_prenomsal:string;
    kar_anncontrat:number;
    kar_datdeb:string;
    kar_datfin:string;
    kar_dtreelprscnss:string;
    kar_ann:number;
    kar_trim:number;
    car_saldec:number;
    kar_prsmntemp:number;
    kar_prsmntsal:number;
    kar_mnttotprs:number;
    kar_situation:string;
    kar_debittotemp:number;
    kar_codexp:number;

}

export class doss_avgass{ 
    ass_mat:number;
    ass_cle:number;
    emp_mat:number;
    emp_cle:number;
    bur_cod:number;
    doa_refdos:number;
    daa_dtdeb:string;
    daa_dtfin:string;
    daa_cin:number;
    daa_dtsais:string;
    daa_numref:string;
    daa_nom:string;
    daa_prenom:string;
    daa_inforef:string;
    daa_agent:number;
    daa_salaire:number;
    daa_dtrec:string;
    daa_flgper:number;
    daa_dtdep:string;

}
export class payresult {
    total:number;
    taux:number;
    finalsum:number;
}
export class employerdata{
    numaf:string;
    trim:string;
    year:string;
    type_avantage:string;
}