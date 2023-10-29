package Test14.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Test14.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Комната
 */
@Entity(name = "IISTest14Комната")
@Table(schema = "public", name = "Комната")
public class Komnata {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Номер")
    private Integer номер;

    @Column(name = "Этаж")
    private Integer этаж;

    @Column(name = "ПлощадьК")
    private Integer площадьк;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Dom")
    @Convert("Dom")
    @Column(name = "Дом", length = 16, unique = true, nullable = false)
    private UUID _domid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Dom", insertable = false, updatable = false)
    private Dom dom;


    public Komnata() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомер() {
      return номер;
    }

    public void setНомер(Integer номер) {
      this.номер = номер;
    }

    public Integer getЭтаж() {
      return этаж;
    }

    public void setЭтаж(Integer этаж) {
      this.этаж = этаж;
    }

    public Integer getПлощадьК() {
      return площадьк;
    }

    public void setПлощадьК(Integer площадьк) {
      this.площадьк = площадьк;
    }


}