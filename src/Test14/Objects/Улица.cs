﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Test14
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Улица.
    /// </summary>
    // *** Start programmer edit section *** (Улица CustomAttributes)

    // *** End programmer edit section *** (Улица CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("УлицаE", new string[] {
            "ИмяУлицы as \'Имя улицы\'"})]
    [View("УлицаL", new string[] {
            "ИмяУлицы as \'Имя улицы\'"})]
    public class Улица : ICSSoft.STORMNET.DataObject
    {
        
        private string fИмяУлицы;
        
        private IIS.Test14.Город fГород;
        
        // *** Start programmer edit section *** (Улица CustomMembers)

        // *** End programmer edit section *** (Улица CustomMembers)

        
        /// <summary>
        /// ИмяУлицы.
        /// </summary>
        // *** Start programmer edit section *** (Улица.ИмяУлицы CustomAttributes)

        // *** End programmer edit section *** (Улица.ИмяУлицы CustomAttributes)
        [StrLen(255)]
        public virtual string ИмяУлицы
        {
            get
            {
                // *** Start programmer edit section *** (Улица.ИмяУлицы Get start)

                // *** End programmer edit section *** (Улица.ИмяУлицы Get start)
                string result = this.fИмяУлицы;
                // *** Start programmer edit section *** (Улица.ИмяУлицы Get end)

                // *** End programmer edit section *** (Улица.ИмяУлицы Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Улица.ИмяУлицы Set start)

                // *** End programmer edit section *** (Улица.ИмяУлицы Set start)
                this.fИмяУлицы = value;
                // *** Start programmer edit section *** (Улица.ИмяУлицы Set end)

                // *** End programmer edit section *** (Улица.ИмяУлицы Set end)
            }
        }
        
        /// <summary>
        /// Улица.
        /// </summary>
        // *** Start programmer edit section *** (Улица.Город CustomAttributes)

        // *** End programmer edit section *** (Улица.Город CustomAttributes)
        [PropertyStorage(new string[] {
                "Город"})]
        [NotNull()]
        public virtual IIS.Test14.Город Город
        {
            get
            {
                // *** Start programmer edit section *** (Улица.Город Get start)

                // *** End programmer edit section *** (Улица.Город Get start)
                IIS.Test14.Город result = this.fГород;
                // *** Start programmer edit section *** (Улица.Город Get end)

                // *** End programmer edit section *** (Улица.Город Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Улица.Город Set start)

                // *** End programmer edit section *** (Улица.Город Set start)
                this.fГород = value;
                // *** Start programmer edit section *** (Улица.Город Set end)

                // *** End programmer edit section *** (Улица.Город Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "УлицаE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View УлицаE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("УлицаE", typeof(IIS.Test14.Улица));
                }
            }
            
            /// <summary>
            /// "УлицаL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View УлицаL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("УлицаL", typeof(IIS.Test14.Улица));
                }
            }
        }
    }
}
